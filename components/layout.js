import Head from "next/head";
import styles from "../styles/Layout.module.css";
import jokes from "../jokes.json";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const jokeIds = jokes.map((joke) => joke.id);

  const getRandomJokeId = () =>{
    const filteredIds = jokeIds.filter((id) => {
      if (children.props.joke) {
        return id != children.props.joke?.id;
      }
      return true;
    });
    return filteredIds[Math.floor(Math.random() * filteredIds.length)];
  }

  return (
    <>
      <Head>
        <title>Code Comedies</title>
        <meta
          name="description"
          content="Code Comedies is a lighthearted and playful website that shows random jokes related to programming and coding"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${useRouter().basePath}/favicon.ico`} />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            <a
              href="https://github.com/CodeWith-Sanchit/code-comedies/blob/main/jokes.json"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribute your Joke
            </a>
          </p>
          <div>
            <a
              href="https://github.com/CodeWith-Sanchit"
              target="_blank"
              rel="noopener noreferrer"
            >
              By <h2>CodeWithSanchit</h2>
            </a>
          </div>
        </div>

        <div className={styles.center}>{children}</div>
        <div className={styles.description}>
          <p>
            <Link href={`/jokes/${getRandomJokeId()}`}>Click to Read a Random Joke</Link>
          </p>
        </div>
      </main>
    </>
  );
}
