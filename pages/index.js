import Head from "next/head";
import jokes from "../jokes.json";
import styles from "../styles/Layout.module.css";

export default function Home() {
  return (
    <div>
      We have {jokes.length} Jokes
    </div>
  );
}
