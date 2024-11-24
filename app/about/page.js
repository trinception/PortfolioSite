
import Image from "next/image";
import Link from 'next/link';

import styles from "./page.module.css";
import Accordion from '../components/Accordion';
import Chat from '../components/Chat'

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
                  <Link className={styles.current} href="/about" data-item='About'>About</Link>
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
          <div className={styles.section1}>

            <div className={styles.aboutBlurb}>


              <div className={styles.titlePicContainer}>

                <div className={styles.imageContainer}>
                  <img width="100%" height="auto" className={styles.portrait} src="./imgs/grad.jpg" alt="Picture of Trinity at university graduation" title="Trinity" data-name="Layer 1" viewBox="0 0 24 24" id="trinity"></img>
                </div>

                <div className={styles.buttons}>
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
                      <li className={styles.icon}>

                       <span className={styles.tooltip}>Contact</span>
                       <a href="/contact">
                          <img width="40" height="40" src="./imgs/mail.png" alt="Email" title="Contact Me" data-name="Layer 1" viewBox="0 0 24 24" id="mail"></img>
                       </a>

                     </li>
                   </ul>


               </div>

               <p> Send me an email or talk to my <a className={styles.wordHighlightClickMe} title="Click Me!" href="/about" rel="noopener noreferrer">PortfolioBot</a>, an AI chatbot I created that knows my skillset, experience, and even my hobbies!
               </p>
              </div>

              <div className={styles.talking}>
                <p className={styles.nameIcon}>About Me</p>
                <p> My journey into the world of software engineering and development began during my first year of university, igniting a passion that continues to drive me today. I love tackling logical problems and challenges, particularly in mathematics and programming. I thrive on creating innovative solutions and exploring different approaches to tackling challenges.</p>
                <br/>
                <p>I'm deeply passionate about the potential of technology to improve our lives. I'm particularly interested in data science, machine learning, and AI. Interdisciplinary interests, that I have independently explored and would love to combine with my technological pursuits, include cognitive science, linguistics, social justice, and data bias.</p>
                <br/><br/>
                <Accordion items={[
                      {
                        title: <>&#127891; Academic Background</>,
                        content: "I have a BSc in Mathematics & Computer Science from Simon Fraser University. Unable to choose between these two fields, I embraced both, allowing me to develop a unique perspective that combines rigorous mathematical thinking with practical programming skills. I hope to pursue grad school one day."
                      },
                      {
                        title: <>&#128187;  Skillset</>,
                        content: (
                          <>
                            Languages: C++, JavaScript, Typescript, Java, Python, SQL, PHP, HTML/CSS, MATLAB
                            <br/><br/>
                            Technologies: Git, Heroku, Next.js, NodeJS, React, AWS
                            <br/><br/>
                            Areas of expertise: While I have strong foundational skills throughout computer science, my strongest skills and greatest interest is in:
                            <br/>
                            -Backend programming
                            <br/>
                            -Object-oriented programming and design
                            <br/>
                            -Data Science/Data Analytics
                            <br/>
                            -Machine Learning
                          </>
                        )
                      },
                      {
                        title: <>&#x1F469;&#x200D;&#x1F4BB; Professional Experience</>,
                        content: (
                          <>
                            I am currently a Machine Learning Research Assistant at <a className={styles.wordHighlightClickMe} title="Click Me!" target="_blank" href="https://www.rosielab.ca" rel="noopener noreferrer">ROSIE Labs</a>, an AI robotics lab in Vancouver, BC. This role allows me to delve into cutting-edge technology, applying my skills to push the boundaries of what's possible in AI and robotics.
                          </>
                      )
                      },
                      {
                        title: <>&#128378; When I'm Not Coding...</>,
                        content: (
                          <>
                             You might find me:
                             <br/>
                            - Curled up with a good book 📚
                            <br/>
                            - Hiking through beautiful British Columbia
                            <br/>
                            - Enjoying cozy computer games or science fiction shows like Star Trek and Doctor Who
                            <br/>
                            - Tending to my plants 🌱
                          </>
                          )
                      }
                    ]} />


              </div>
            </div>
        </div>
        <div className={styles.sectionContainer}>
          <div className={styles.section1}>
            <div className={styles.botBlurb}>
              <div className={styles.BotPicContainer}>

                <div className={styles.imageContainer}>
                  <img src="./imgs/h-10.png" alt="computer" title="Trinception" width="100%" height="100%"/>
                </div>

              </div>

              <div>

                <div className={styles.chatBotContainer}>
                  <div className={styles.aboutChatBot}>
                    <span className={styles.heading}>PortfolioBot</span>
                    <p className={styles.words}> Talk to me! This is an AI chatbot knowledgable about me. Find out if I have the skillset you're looking for, ask about the tech topics I'm interested in, learn more about my community involvement, and more! </p>
                  </div>
                  <Chat/>

                </div>
              </div>
            </div>
          </div>
        </div>

  </main>
);
}
