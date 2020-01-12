import { useState, useEffect } from "react";
import { IStory } from "../types";

interface IStoryHook {
  stories: IStory[] | null;
  isFetching: boolean;
  fetchMoreStories: () => void;
}

const useFetchStories = (): IStoryHook => {
  const [stories, setStoriesLocal] = useState<IStory[] | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [{ startAt, limitAt }, setPagination] = useState({
    startAt: 0,
    limitAt: 50
  });

  const fetchMoreStories = () => {
    if (isFetching) {
      return;
    }
    setPagination(state => ({
      startAt: state.startAt + 50,
      limitAt: state.limitAt + 50
    }));
  };

  useEffect(() => {
    async function fetchStories(): Promise<IStory[]> {
      const url = `https://hacker-news.firebaseio.com/v0/topstories.json?orderBy=%22$key%22&startAt="${startAt}"&limitToFirst=${limitAt}`;

      // Array to store the list of story Ids
      let listOfStoryIds: number[] = [];

      try {
        let res = await fetch(url);
        listOfStoryIds = await res.json();
      } catch (error) {
        console.error(error);
      }

      // Array to store the stories objects
      const storiesList: IStory[] = [];

      try {
        // For each story id fetches a story object and saves it into the storiesList
        await Promise.all(
          listOfStoryIds.map(async (storyId: number | undefined) => {
            if (storyId !== undefined) {
              const res = await fetch(
                `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
              );
              const story: IStory = await res.json();
              storiesList.push(story);
            }
          })
        );
      } catch (error) {
        console.error(error.message);
      }
      return storiesList;
    }

    fetchStories().then(newStories => {
      setStoriesLocal(stories => {
        if (stories && stories.length > 0) {
          return stories.concat(newStories);
        } else {
          return newStories;
        }
      });
    });
  }, [startAt, limitAt]);

  return {
    stories,
    isFetching,
    fetchMoreStories
  };
};

export default useFetchStories;
