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
  const buttonClasses = `${styles.selector} ${isActive ? styles.active : ""}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {name}
    </button>
  );
};
