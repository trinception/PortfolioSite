import Image from "next/image";
import Link from 'next/link';

import styles from "./page.module.css";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <main className={styles.main}>
        <div className={styles.cursor}></div>
        <div className={styles.navContainer}>

          <nav>
            <ul className={styles.navBar}>

              <li >
                <Link className={styles.current} href="/" data-item='Home'>Home</Link>
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

            <div className={styles.introSection}>

              <div className={styles.imageContainer}>
                <img src="./imgs/h-4.png" alt="computer" title="Trinception" width="100%" height="100%"  />
              </div>

              <div className={styles.center}>
                 <p > <span className={styles.nameIcon}>Hi! My name is Trinity</span> <a className={styles.wave}>&#128075;</a> <br />
                 I am a <span className={styles.wordHighlightPassion}>Data Analyst</span> in Vancouver, Canada
                 who is fascinated by all things data, AI, and programming. </p>

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

              </div>


            </div>

          </div>



        </div>



        <div className={styles.sectionContainer2}>

          <div className={styles.section}>
            <div className={styles.projectSection}>
              <p className={styles.wave}>&#128187;</p> <a className={styles.nameIcon}>Research & Personal Projects</a>
              <p> This is a glimpse of my work. Not all of my projects are on <a className={styles.wordHighlightClickMe} title="Click Me!" target="_blank" href="https://github.com/trinception" rel="noopener noreferrer">GitHub</a>.
              For any specific inquiries on projects, <a className={styles.wordHighlightSubtle} title="Click Me!" href="/contact" rel="noopener noreferrer">contact me</a>.</p>
              <ul className={styles.grid}>

                <ProjectCard project={{
                      src:"./imgs/HCIData.png",
                      title: "(Research) Human Interaction Motion Capture Dataset",
                      languages: "hsl",
                      technologies: "Vicon Shogun, Blender",
                      description: "Co-authored motion capture dataset of salsa dancers from various levels (beginner, intermediate, professional) improvising over a variety of different music styles and tempos.",
                      link: "https://github.com/trinception/Blank-Link",
                      code:"false"
                    }} />

                <ProjectCard project={{
                        src:"./imgs/website.png",
                        title: "Portfolio Website",
                        languages: "HTML, CSS, JS, PHP",
                        technologies: "NextJS, NodeJS, React, MongoDB, AWS",
                        description: "Built my portfolio website from scratch. Includes interactive, dynamic elements, and a variety of unique features and easter eggs such as an AI chatbot.",
                        link: "https://github.com/trinception/PortfolioSite",
                        code:"true"
                      }} />

                      <ProjectCard project={{
                          src:"./imgs/portfoliobot.png",
                          title: "PortfolioGPT",
                          languages: "HTML, CSS, JS",
                          technologies: "OpenAI",
                          description: "Created an interactive AI chatbot that answers questions about me based on my CV and resume, using the OpenAI API Beta Assistant feature.",
                          link: "https://github.com/trinception/PortfolioSite/blob/main/app/components/Chat.js",
                          code:"true"
                        }} />


                <ProjectCard project={{
                        src:"./imgs/multiplayerGame2.png",
                        title: "Full-Stack Multi-user gaming site",
                        languages: "HTML, CSS, JavaScript, SQL",
                        technologies: "Heroku, Socket.io, NodeJS, PostGreSQL",
                        description: "Developed a full stack web-based racing game application allowing users to create profiles, add friends, engage in real-time chat, and compete against each other.",
                        link: "https://github.com/CodePerson2/Flag-Racers",
                        code:"true"
                      }} />
              </ul>

              <ul className={styles.wrapper}>

                   <li className={styles.icon}>

                        <button className={styles.btn}>

                            <a className={styles.btnWords} href="/projects">More projects...</a>

                        </button>

                    </li>
              </ul>
            </div>
          </div>

        </div>



        <div className={styles.sectionContainer}>

          <div className={styles.section}>
            <div className={styles.aboutSection}>

                <div className={styles.imageContainer}>
                    <img src="./imgs/h-6.png" alt="computer" title="Trinception" width="100%" height="100%"/>
                </div>

                <div className={styles.talking}>
                  <p className={styles.nameIcon}>About Me</p>

                  <p>
                    My passion for <span className={styles.wordHighlightSubtle}>software engineering and development</span> began in my first year of university.
                    I love to create and explore different ways to solve new problems, in addition to enjoying the process of refining and perfecting pre-existing solutions.
                    I have a BSc. in <a className={styles.wordHighlightSubtle} target="_blank" href="https://www.sfu.ca/math.html" rel="noopener noreferrer">Mathematics</a> & <a className={styles.wordHighlightSubtle} target="_blank" href="https://www.sfu.ca/fas/computing.html" rel="noopener noreferrer">Computer Science</a> (couldn’t pick just one!) from Simon Fraser University.
                    I am currently a Data Analyst with the <a className={styles.wordHighlightClickMe} title="Click Me!" target="_blank" href="https://rcmp.ca/en" rel="noopener noreferrer">RCMP</a> in Vancouver, BC.
                    <br/>
                    <br/>
                    Want to know more? Send me an email or talk to my <a className={styles.wordHighlightClickMe} title="Click Me!" href="/about" rel="noopener noreferrer">PortfolioBot</a> on my 'about' page, an AI chatbot I created that knows my skillset, experience, and even my hobbies!
                  </p>

                </div>

                <ul className={styles.wrapper}>

                    <li className={styles.icon}>

                      <button className={styles.btn}>
                        <a href="/contact">
                          <img width="30" height="30" src="./imgs/mail.png" alt="Email" title="Contact Me" data-name="Layer 1" viewBox="0 0 24 24" id="mail"></img>
                        </a>
                       </button>

                     </li>

                     <li className={styles.icon}>

                          <button className={styles.btn}>

                              <a className={styles.btnWords} href="/about">About Me...</a>

                          </button>

                      </li>
                </ul>

            </div>

          </div>
        </div>

    </main>
  );
}
