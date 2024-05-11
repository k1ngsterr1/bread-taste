import { useEffect, useState } from "react";
import { CatalogueSelector } from "../../features/CatalogueSelector";
import { breads } from "../../shared/content";
import { Card } from "../../shared/ui/Card";

import styles from "./styles.module.scss";
import { ActiveCard } from "../../shared/ui/ActiveCard";

export const Catalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState("Хлеб");
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    console.log("Selected Category Updated to:", selectedCategory);
  }, [selectedCategory]);

  const filteredBreads = breads.filter(
    (bread) => bread.category === selectedCategory
  );

  const handleCardClick = (index: any) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.catalogue}>
      <h1>Наш каталог</h1>
      <CatalogueSelector
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <div className={styles.grid}>
        {filteredBreads.map((bread, index) =>
          activeIndex === index ? (
            <ActiveCard
              key={index}
              name={bread.name}
              image={bread.img}
              proteins={bread.proteins}
              fats={bread.fats}
              carbs={bread.carbs}
              calories={bread.calories}
            />
          ) : (
            <Card
              key={index}
              photo={bread.img}
              name={bread.name}
              onClick={() => handleCardClick(index)}
            />
          )
        )}
      </div>
    </div>
  );
};
