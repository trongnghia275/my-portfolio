import Head from 'next/head';
import styles from './styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <nav>
          <ul className={styles.navList}>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section id="about" className={styles.section}>
          <h2>About Me</h2>
          <p>Hi, I am [Your Name]. I am a [Your Job Title].</p>
        </section>

        <section id="projects" className={styles.section}>
          <h2>Projects</h2>
          <ul>
            <li>Project 1: Description</li>
            <li>Project 2: Description</li>
            <li>Project 3: Description</li>
          </ul>
        </section>

        <section id="contact" className={styles.section}>
          <h2>Contact</h2>
          <p>You can reach me at: [your-email@example.com]</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Powered by Next.js</p>
      </footer>
    </div>
  );
}
