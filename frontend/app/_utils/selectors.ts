import { selector, selectorFamily } from "recoil";
import { inventoryState } from "./atom"; // replace with the correct path
import { Inventory } from "./types";

export const uniqueBrandNamesSelector = selector({
  key: "uniqueBrandNamesSelector",
  get: ({ get }) => {
    try {
      const inventoryStateValue = get(inventoryState);

      if (!inventoryStateValue) {
        console.error("Inventory state is undefined or null.");
        return [];
      }

      const brandNames = inventoryStateValue.map((car) => car.brandName);
      return Array.from(new Set(brandNames));
    } catch (error) {
      console.error("Error in uniqueBrandNamesSelector:", error);
      return [];
    }
  },
});

export const detailedCarByBrandSelector = selectorFamily<Inventory[], string>({
  key: "detailedCarByBrandSelector",
  get:
    (brandName: string) =>
    ({ get }) => {
      try {
        const detailedCarStateValue = get(inventoryState);

        if (!detailedCarStateValue) {
          console.error("Inventory state is undefined or null.");
          return [];
        }

        return (
          detailedCarStateValue.filter((car) => car.brandName === brandName) ||
          []
        );
      } catch (error) {
        console.error("Error in detailedCarByBrandSelector:", error);
        return [];
      }
    },
});
