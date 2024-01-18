import { selector, selectorFamily } from "recoil";
import { inventoryState } from "./atom"; // replace with the correct path

// Selector to get an array of unique brandNames
export const uniqueBrandNamesSelector = selector({
  key: "uniqueBrandNamesSelector",
  get: ({ get }) => {
    const inventoryStateValue = get(inventoryState);
    if (!inventoryStateValue) {
      console.error("Inventory state is undefined or null.");
      return [];
    }
    const brandNames = inventoryStateValue.map((car) => car.brandName);
    return Array.from(new Set(brandNames));
  },
});

// Selector to get detailed information for a specific brandName
export const detailedCarByBrandSelector = selectorFamily({
  key: "detailedCarByBrandSelector",
  get:
    (brandName: string) =>
    ({ get }) => {
      const detailedCarStateValue = get(inventoryState);
      return (
        detailedCarStateValue.filter((car) => car.brandName === brandName) ||
        null
      );
    },
});
