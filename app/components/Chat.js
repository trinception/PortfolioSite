"use client"

import React, { useState, useEffect, useRef } from 'react';
import styles from './Chat.module.css';
import Markdown from 'react-markdown';

import { AssistantStream } from 'openai/lib/AssistantStream';
import { RequiredActionFunctionToolCall } from 'openai/resources/beta/threads/runs/runs';
import { assistantId } from "@/app/assistant-config";

const UserMsg = ({text}) => {
  return (
      <div className={styles.user}>
        <div className={styles.message}>{text}</div>

      </div>
  );
}

const PortfolioBotMsg = ({text}) => {
  return (
      <div className={styles.assistant}>
        <span className={styles.role}></span>
        <div className={styles.message}>
          <Markdown>{text}</Markdown>
        </div>
      </div>
  );
}

const LoadingMsg = () =>{
  return(
    <div className={styles.LoadingMsg}>
      <div className={styles.loadingFlag}>
        <div className={styles.flagContainer}>
          <div className={styles.loadingIcon}>
            <div className={styles.dot1}></div>
            <div className={styles.dot2}></div>
            <div className={styles.dot3}></div>
          </div>
        </div>
      </div>
      <div className={styles.loadingBody}>
        <div className={styles.messageContainer}>
          <div className={styles.messageBubble}>
            <p>PortfolioBot is responding&hellip;</p>
          </div>
        </div>
      </div>
    </div>
  )
}


const Message = ({ role, text }) => {

  switch(role){
    case "user":
      return <UserMsg text={text} />;
    case "assistant":
      return <PortfolioBotMsg text={text}/>
    default:
      return null;
  }
};

const Chat = ({
  functionCallHandler = () => Promise.resolve(""),
  }) => {

  //Set message input bar to blank
  const [messageInput, setMessageInput] = useState('');

  //Set initial chat messages
  const [messages, setMessages] = useState([]);

  //Disabled further input while processing prompts
  const [inputDisabled, setInputDisabled] = useState(false);
  //set as loading while processing prompts
  const [loading, setAsLoading] = useState(false);


  // automatically scroll to bottom of chat
  const messagesEndRef = useRef();
  const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  /*useEffect(() => {
      scrollToBottom();
  }, [messages]);*/

  //Each new interaction is its own thread; this creates a blank one
  const [threadId, setThreadId] = useState('');

  // Create a new thread when chat component created (The page is refreshed or the page is first navigated to)
  useEffect(() => {
    const createThread = async () => {
      const res = await fetch(`/api/portfolioBot/thread`, {
        method: "POST",
      });
      const data = await res.json();
      setThreadId(data.threadId);
    };
    createThread();
  }, []);

  // Send a message to the PortfolioBot
  const sendMessage = async (text) => {
    const response = await fetch(
      `/api/portfolioBot/thread/${threadId}/messages`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: text
        })
      }
    );
    const stream = AssistantStream.fromReadableStream(response.body);
    handleReadableStream(stream);

  };

  const submitActionResult = async (runId, toolCallOutputs) => {
    const response = await fetch(
      `/api/portfolioBot/thread/${threadId}/actions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          runId: runId,
          toolCallOutputs: toolCallOutputs,
        }),
      }
    );
    const stream = AssistantStream.fromReadableStream(response.body);
    handleReadableStream(stream);
  };

  const submitPrompt = (e) =>{
    e.preventDefault();
    if (!messageInput.trim()) return;
    sendMessage(messageInput);
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", text: messageInput },
    ]);
    setMessageInput("");
    setInputDisabled(true);
    setAsLoading(true);
    console.log("loading...");
    scrollToBottom();
  };

  // textCreated - create new assistant message
  const handleTextCreated = () => {
    appendMessage("assistant", "");
  };

  // textDelta - append text to last assistant message
  const handleTextDelta = (delta) => {
    if (delta.value != null) {
      appendToLastMessage(delta.value);
    };
    if (delta.annotations != null) {
      annotateLastMessage(delta.annotations);
    }
  };

  // handleRequiresAction - handle function call
  const handleRequiresAction = async (event) => {
    const runId = event.data.id;
    const toolCalls = event.data.required_action.submit_tool_outputs.tool_calls;
    // loop over tool calls and call function handler
    const toolCallOutputs = await Promise.all(
      toolCalls.map(async (toolCall) => {
        const result = await functionCallHandler(toolCall);
        return { output: result, tool_call_id: toolCall.id };
      })
    );
    setInputDisabled(true);
    setAsLoading(true);

    submitActionResult(runId, toolCallOutputs);
  };

  // handleRunCompleted - re-enable the input form
  const handleRunCompleted = () => {
    setInputDisabled(false);
    setAsLoading(false);
    scrollToBottom();
  };

  const handleReadableStream = (stream) => {
   // messages
   stream.on("textCreated", handleTextCreated);
   stream.on("textDelta", handleTextDelta);

   // events without helpers yet (e.g. requires_action and run.done)
   stream.on("event", (event) => {
     if (event.event === "thread.run.requires_action")
       handleRequiresAction(event);
     if (event.event === "thread.run.completed") handleRunCompleted();
   });
 };

 const appendToLastMessage = (text) => {
    setMessages((prevMessages) => {
      const lastMessage = prevMessages[prevMessages.length - 1];
      const updatedLastMessage = {
        ...lastMessage,
        text: lastMessage.text + text,
      };
      scrollToBottom();
      return [...prevMessages.slice(0, -1), updatedLastMessage];
    });

  };

  const appendMessage = (role, text) => {
    setMessages((prevMessages) => [...prevMessages, { role, text }]);
  };

  const annotateLastMessage = (annotations) => {
    setMessages((prevMessages) => {
      const lastMessage = prevMessages[prevMessages.length - 1];
      const updatedLastMessage = {
        ...lastMessage,
      };
      annotations.forEach((annotation) => {
        if (annotation.type === 'file_path') {
          updatedLastMessage.text = updatedLastMessage.text.replaceAll(
            annotation.text,
            `/api/files/${annotation.file_path.file_id}`
          );
        }
      })
      scrollToBottom();
      return [...prevMessages.slice(0, -1), updatedLastMessage];
    });

  }

  return (
    <div className={styles.chatBox}>
      <div className={styles.scroll}>
        <ul className={styles.log}>
          {messages.map((message, index) => (
            <Message key={index} role={message.role} text={message.text} />
          ))}
            {loading&& (<div className={styles.LoadingMsg}>
              <div className={styles.loadingFlag}>
                <div className={styles.flagContainer}>
                  <div className={styles.loadingIcon}>
                    <div className={styles.dot1}></div>
                    <div className={styles.dot2}></div>
                    <div className={styles.dot3}></div>
                  </div>
                </div>
              </div>
              <div className={styles.loadingBody}>
                <div className={styles.messageContainer}>
                  <div className={styles.message}>
                    <p>PortfolioBot is responding&hellip;</p>
                  </div>
                </div>
              </div>
            </div>)}
        </ul>
        <div ref={messagesEndRef}/>
      </div>

      <form onSubmit={submitPrompt} className={styles.typeArea}>
        <input
          type="text"
          className={styles.userInput}
          placeholder="Tell me about Trinity's skillset"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <div className={styles.buttonWrapper}>
          <button className={styles.button} type="submit" value="Send">
            <div className={styles.svgWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="auto"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
            <span></span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Chat;
