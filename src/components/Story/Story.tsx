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

  const textEllipsis = (str: string | undefined): string | undefined => {
    if (typeof str !== undefined) {
      return str && str.length > 35 ? str.substr(0, 35) + "..." : str;
    }
  };

  return (
    <article
      className={`${styles.card} ${isExpanded ? styles.expand : ""}`}
      onClick={() => onClick(id)}
    >
      <h4>{isExpanded ? title : textEllipsis(title)}</h4>
      <h6>{by}</h6>
      <p>{isExpanded ? text : textEllipsis(text)}</p>
      <a href={url}>Read more...</a>
    </article>
  );
};

export default Story;
