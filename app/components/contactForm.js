"use client";

import { useState } from "react";
import styles from './contactForm.module.css';

export default function ContactForm() {
  console.log('contactform accessed in components/contactform.js');
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Message: ", message);
        let body= JSON.stringify({
            name,
            email,
            message,
        });
        console.log("Body: ", body);

        const res = await fetch("api/contact", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                message,
            }),
        });

        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);

        if (success) {
            setName("");
            setEmail("");
            setMessage("");
        }
    };

    return (
        <>
              <form onSubmit={handleSubmit} action="" className={styles.form}>
                <input
                        className={styles.input}
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        id="name"
                        placeholder="Name"
                />
                  <input
                          className={styles.input}
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          type="text"
                          id="email"
                          placeholder="Email"
                      />
                  <input
                          className={styles.input}
                          onChange={(e) => setMessage(e.target.value)}
                          value={message}
                          type="text"
                          id="message"
                          placeholder="Type your message here..."
                      />
                <input className={styles.sendButton} type="submit" value="Send"/>

              </form>


            <div className="bg-slate-100 flex flex-col">
                {error && (
                    <div
                        className={`${success ? "text-green-800" : "text-red-600"
                            } px-5 py-2`}
                    >
                        {error}
                    </div>
                )}
            </div>
        </>
    );
}
