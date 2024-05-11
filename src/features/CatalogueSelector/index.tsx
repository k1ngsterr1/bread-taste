import { Selector } from "../../shared/ui/Selector";

import styles from "./styles.module.scss";

export const CatalogueSelector = () => {
  return (
    <div className={styles.catalogue_selector}>
      <Selector name="Хлеб" isActive onClick={() => console.log("void")} />
      <Selector
        name="Черный хлеб"
        isActive
        onClick={() => console.log("void")}
      />
      <Selector name="Выпечка" isActive onClick={() => console.log("void")} />
    </div>
  );
};
