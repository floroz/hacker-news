import React, { useState } from "react";
import { IStory } from "../../types";
import Story from "../Story/Story";
import styles from "./StoryList.module.scss";

interface Props {
  stories: IStory[];
}

const StoryList: React.FC<Props> = ({ stories }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const onClickHandler = (id: number) => {
    if (expandedId !== id) {
      setExpandedId(id);
    } else {
      setExpandedId(null);
    }
  };

  return (
    <section className={styles.section}>
      {stories && stories.length > 0 ? (
        stories.map(story => {
          if (!story) {
            return story;
          }
          return (
            <Story
              story={story}
              key={story.id}
              isExpanded={expandedId === story.id}
              onClick={onClickHandler}
            />
          );
        })
      ) : (
        <div>Spinner</div>
      )}
    </section>
  );
};

export default StoryList;
