import jokes from "../../jokes.json";

function Joke({ joke }) {
  return <div>{joke.joke}</div>;
}

export async function getStaticPaths() {
  const paths = jokes.map((joke) => ({
    params: { id: joke.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const joke = jokes.filter((joke) => joke.id == params.id)[0];
  return { props: { joke } };
}

export default Joke;
