import { useEffect, useState } from "react";
import { CatalogueSelector } from "../../features/CatalogueSelector";
import { breads } from "../../shared/content";
import { Card } from "../../shared/ui/Card";

import styles from "./styles.module.scss";

export const Catalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState("Хлеб");

  useEffect(() => {
    console.log("Selected Category Updated to:", selectedCategory);
  }, [selectedCategory]);

  const filteredBreads = breads.filter(
    (bread) => bread.category === selectedCategory
  );

  return (
    <div className={styles.catalogue}>
      <h1>Наш каталог</h1>
      <CatalogueSelector
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <div className={styles.grid}>
        {filteredBreads.map((bread, index) => (
          <Card
            key={index}
            photo={bread.img}
            name={bread.name}
            proteins={bread.proteins}
            calories={bread.calories}
            carbs={bread.carbs}
            fats={bread.fats}
          />
        ))}
      </div>
    </div>
  );
};
