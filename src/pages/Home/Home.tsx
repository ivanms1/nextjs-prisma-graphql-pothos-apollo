import { useSearchArticlesQuery } from "generated";

function Home() {
  const { data } = useSearchArticlesQuery();

  return (
    <div>
      <h1>Web</h1>
      <div>
        {data?.articles?.results?.map((article) => (
          <p key={article.id}> {article.title}</p>
        ))}
      </div>
      <button>Beep</button>
    </div>
  );
}

export default Home;
