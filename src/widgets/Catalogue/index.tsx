import { CatalogueSelector } from "../../features/CatalogueSelector";
import { breads } from "../../shared/content";
import { Card } from "../../shared/ui/Card";

import styles from "./styles.module.scss";

export const Catalogue = () => {
  return (
    <div className={styles.catalogue}>
      <h1>Наш каталог</h1>
      <CatalogueSelector />
      <div className={styles.grid}>
        {breads.map((bread, index) => (
          <Card photo={bread.img} name={bread.name} />
        ))}
      </div>
    </div>
  );
};
