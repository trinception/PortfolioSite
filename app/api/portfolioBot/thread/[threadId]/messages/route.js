import { assistantId } from "@/app/assistant-config";
import { openai } from "@/app/openai";

export const runtime = "nodejs";

// Send a new message to a thread
export async function POST(request, { params: { threadId } }) {
  console.log("inside api/portfolioBot/thread/threadId/messages/route.js");
  try{
    const { content } = await request.json();

    await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: content,
    });
    // Run the assistant
      /*const run = await openai.beta.threads.runs.create(
        threadId,
        {
          assistant_id: process.env.OPENAI_ASSISTANT_ID
        }
      );

      return Response.json({
        messageId: threadMessage.id,
        runId: run.id
      });*/
      const stream = openai.beta.threads.runs.stream(threadId, {
        assistant_id: assistantId,
      });
      console.log(stream.toReadableStream());
      return new Response(stream.toReadableStream());

  } catch (error) {
    console.error('Error creating message:', error);
    return Response.json(
      { error: 'Failed to create message', details: error.message },
      { status: 500 }
    );
  }

}
