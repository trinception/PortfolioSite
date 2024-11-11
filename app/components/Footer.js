"use client";

import styles from "./Footer.module.css";

export default function Footer() {

return(
  <div className={styles.footerContainer}>
  <div className={styles.footerSection}>

    <div className={styles.footer}>

        <div className={styles.footerBlurb}>
          <p className={styles.wordHighlightClickMe}>Hello There!</p>

          <p>This website is best viewed on a desktop!</p>
          <br/>
          <p>Email me at trinityevansdev@gmail.com</p>
          <p>Made by Trinity Evans </p>
          <br/>
        </div>
        <div className={styles.footerLinks}>
          <div>
            <a title="GitHub" target="_blank" href="https://github.com/trinception" rel="noopener noreferrer" >GitHub</a>
          </div>

          <div>
            <a target="_blank" href="https://www.linkedin.com/in/trinity-e-b633812b4" rel="noopener noreferrer" >LinkedIn</a>
          </div>

          <div>
            <a href="/contact">  Contact</a>
          </div>
        </div>

    </div>
  </div>
</div>);
}
