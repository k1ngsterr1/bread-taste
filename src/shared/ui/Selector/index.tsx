import React from "react";

import styles from "./styles.module.scss";

interface ISelectorProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
}

export const Selector: React.FC<ISelectorProps> = ({
  name,
  isActive,
  onClick,
}) => {
  return <button className={styles.selector}>{name}</button>;
};
