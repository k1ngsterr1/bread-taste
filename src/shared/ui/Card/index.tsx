import React from "react";

import styles from "./styles.module.scss";
import useHoverAnimation from "../../hooks/useHoverAnimation";

interface ICardProps {
  photo: ImageMetadata;
  name: string;
  proteins: string;
  fats: string;
  carbs: string;
  calories: string;
}

export const Card: React.FC<ICardProps> = ({
  photo,
  name,
  proteins,
  calories,
  carbs,
  fats,
}) => {
  const { cardRef, contentRef, handleMouseEnter, handleMouseLeave } =
    useHoverAnimation();

  return (
    <div
      className={styles.card}
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={photo.src} alt={name} />
      <span className={styles.card__text}>{name}</span>
      <div className={styles.content} ref={contentRef}>
        <div className={styles.details}>
          <p>Состав:</p>
          <p>Белки: {proteins}г</p>
          <p>Жиры: {fats}г</p>
          <p>Углеводы: {carbs}г</p>
          <p>Энергетическая ценность: {calories} ккал</p>
        </div>
      </div>
    </div>
  );
};
