import React from "react";

import styles from "./styles.module.scss";

interface IActiveCardProps {
  name: string;
  image: ImageMetadata;
  proteins: string;
  fats: string;
  carbs: string;
  calories: string;
}

export const ActiveCard: React.FC<IActiveCardProps> = ({
  name,
  image,
  proteins,
  fats,
  carbs,
  calories,
}) => {
  return (
    <div className={styles.activity_card}>
      <img src={image.src} alt={name} className={styles.activity_card__image} />
      <div className={styles.activitiy_card__content}>
        <span className={styles.activity_card__name}>{name}</span>
        <br />
        <br />
        <span className={styles.activity_card__contain}>Состав:</span>
        <br />
        <br />
        <span className={styles.activity_card__text}>
          В 100г продукта содержится:
        </span>
        <br />
        <br />
        <span className={styles.activity_card__protein}>
          Белки - {proteins}г
        </span>
        <br />
        <span className={styles.activity_card__fats}>Жиры - {fats}г</span>
        <br />
        <span className={styles.activity_card__carbons}>
          Углеводы - {carbs}г
        </span>
        <br />
        <span className={styles.activity_card__energy}>
          Энергетическая ценность - {calories}ккал
        </span>
        <br />
      </div>
    </div>
  );
};
