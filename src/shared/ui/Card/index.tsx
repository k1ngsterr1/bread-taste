import React from "react";

import styles from "./styles.module.scss";

interface ICardProps {
  photo: ImageMetadata;
  name: string;
}

export const Card: React.FC<ICardProps> = ({ photo, name }) => {
  return (
    <div className={styles.card}>
      <img src={photo.src} alt={name} />
      <span className={styles.card__text}>{name}</span>
    </div>
  );
};
