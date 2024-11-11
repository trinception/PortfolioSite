"use client";

import React, { useState } from 'react';
import styles from './Accordion.module.css';

const AccordionItem = ({ title, content }) => {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordionItem}>
      <button
        className={`${styles.accordionBtn} ${isOpen ? styles.active : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && (
        <div className={styles.accordionContent}>
          <div className={styles.info}>{content}</div>
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
