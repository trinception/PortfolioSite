import Image from "next/image";
import Link from 'next/link';

import styles from "./page.module.css";
import ContactForm from "../components/contactForm";

export default function Home() {
  return (
    <main className={styles.main}>

        <div className={styles.navContainer}>

          <nav>
            <ul className={styles.navBar}>


              <li >
                <Link className={styles.listItem} href="/" data-item='Home'>Home</Link>
              </li>

              <li>
                <Link className={styles.listItem} href="/projects" data-item='Projects'>Projects</Link>
              </li>

              <li>
                <Link className={styles.listItem} href="/about" data-item='About'>About</Link>
              </li>

            </ul>
          </nav>
          <div className={styles.upperCorner}>

                <div>
                  <Link href="/" data-item='Home'>
                    <Image
                      src="/h.svg"
                      alt="Trinity Evans"
                      className={styles.nameLogo}
                      width={70}
                      height={45}
                      priority
                    />
                  </Link>
                </div>


          </div>
        </div>
        <div className={styles.sectionContainer}>
          <div className={styles.section}>
            <div className={styles.imageContainer}>
              <img src="./imgs/h-6.png" alt="computer" title="Trinception" width="100%" height="100%"/>
            </div>
            <div className={styles.container}>
              <div className={styles.heading}>Contact Me</div>
              <ContactForm />
              <div>
                  <div>
                    <ul className={styles.wrapper}>
                       <li className={styles.icon}>

                            <span className={styles.tooltip}>GitHub</span>
                            <a title="GitHub" target="_blank" href="https://github.com/trinception" rel="noopener noreferrer" >
                              <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" title="GitHub" data-name="Layer 1" viewBox="0 0 24 24" id="github">
                                <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                              </svg>
                            </a>


                        </li>
                        <li className={styles.icon} >

                            <span className={styles.tooltip}>LinkedIn</span>
                            <a target="_blank" href="https://www.linkedin.com/in/trinity-e-b633812b4" rel="noopener noreferrer" >
                              <img width="40" height="40" src="./imgs/linkedin.svg" alt="LinkedIn" title="LinkedIn" data-name="Layer 1" viewBox="0 0 24 24" id="linkedin"></img>
                            </a>

                         </li>

                      </ul>
                  </div>
                </div>
            </div>
          </div>
        </div>

      </main>
    );
}
