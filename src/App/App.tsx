import React from "react";
import useFetchStories from "../hooks/useFetchStories";
import Header from "../components/Header/Header";
import StoryList from "../components/StoryList/StoryList";
import styles from "./App.module.scss";
const App: React.FC = () => {
  const { stories, isFetching, fetchMoreStories } = useFetchStories();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Hacker News</h1>
        {stories && <StoryList stories={stories} />}
        {!isFetching ? (
          <button onClick={fetchMoreStories}>More Stories</button>
        ) : (
          <div>Loading...</div>
        )}
      </main>
    </>
  );
};

export default App;
