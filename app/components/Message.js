"use client"

import React, {useState} from 'react';
import styles from './Message.module.css'

const Message = ({ role, content }) => {

  const inputRole = role;
  console.log('input role for message in component Chat.js:');
  console.log(inputRole);
  if (inputRole=='user'){
    return (
        <div className={styles.user}>
          <div className={styles.message}>{content}</div>

        </div>
    );
  }
  else{
    return (
        <div className={styles.assistant}>
          <span className={styles.role}>
          {role === 'user' ? 'You' : 'AI'}</span>
          <div className={styles.message}>{content}</div>
        </div>
    );
  }
}

export default Message;
