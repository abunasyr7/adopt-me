import { Pet } from "../api/APIResponsesTypes";
import { createContext } from "react";

const AdoptedPetContext = createContext<[Pet, (adoptedPet: Pet) => void]>([
  {
    id: 13,
    name: "Fido",
    animal: "dog",
    description: "Lorem ipsum",
    breed: "Beagle",
    images: [],
    city: "Seattle",
    state: "WA",
  },
  () => {},
]);

export default AdoptedPetContext;
