import { Selector } from "../../shared/ui/Selector";

import styles from "./styles.module.scss";

interface ICatalogueSelectorProps {
  onCategoryChange: any;
  selectedCategory: any;
}

export const CatalogueSelector: React.FC<ICatalogueSelectorProps> = ({
  onCategoryChange,
  selectedCategory,
}) => {
  const handleClick = (category: string) => {
    console.log("Before changing category", selectedCategory);
    onCategoryChange(category);
    console.log("After request to change category", category);
  };

  return (
    <div className={styles.catalogue_selector}>
      <Selector
        name="Хлеб"
        isActive={selectedCategory === "Хлеб"}
        onClick={() => handleClick("Хлеб")}
      />
      <Selector
        name="Черный хлеб"
        isActive={selectedCategory === "Черный хлеб"}
        onClick={() => handleClick("Черный хлеб")}
      />
      <Selector
        name="Выпечка"
        isActive={selectedCategory === "Выпечка"}
        onClick={() => handleClick("Выпечка")}
      />
    </div>
  );
};
