import React from "react";
import useFetchStories from "../hooks/useFetchStories";
import Header from "../components/Header/Header";
import StoryList from "../components/StoryList/StoryList";
import styles from "./App.module.scss";
import Loader from "react-loader-spinner";

const App: React.FC = () => {
  const { stories, isFetching, fetchMoreStories } = useFetchStories();

  const loading = (
    <Loader type="ThreeDots" color="#somecolor" height={80} width={80} />
  );

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Hacker News</h1>
        {stories ? (
          <>
            <StoryList stories={stories} />{" "}
            {!isFetching ? (
              <button className={styles.more} onClick={fetchMoreStories}>
                More Stories &rarr;
              </button>
            ) : (
              loading
            )}
          </>
        ) : (
          loading
        )}
      </main>
    </>
  );
};

export default App;
