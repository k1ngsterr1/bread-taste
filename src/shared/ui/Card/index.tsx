import React from "react";

import styles from "./styles.module.scss";

interface ICardProps {
  photo: ImageMetadata;
  name: string;
  onClick: any;
}

export const Card: React.FC<ICardProps> = ({ photo, name, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={photo.src} alt={name} />
      <span className={styles.card__text}>{name}</span>
    </div>
  );
};
