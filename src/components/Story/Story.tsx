import React from "react";
import { IStory } from "../../types";
import styles from "./Story.module.scss";

interface Props {
  story: IStory;
  isExpanded: boolean;
  onClick: (id: number) => void;
}

const Story: React.FC<Props> = ({ story, isExpanded, onClick }) => {
  const { title, by, text, url, id } = story;

  const reducedTitle =
    title && title.length > 50 ? title.substr(0, 50) + "..." : title;

  return (
    <article
      className={`${styles.card} ${isExpanded ? styles.expand : ""}`}
      onClick={() => onClick(id)}
    >
      <h4>{reducedTitle}</h4>
      <h6>{by}</h6>
      <a href={url}>Read more...</a>
      {isExpanded && text && <p>{text}</p>}
    </article>
  );
};

export default Story;
