import { QueryStatus, useQuery } from "@tanstack/react-query";
import fetchBreedList from "../fetch/fetchBreedList";
import { Animal } from "../api/APIResponsesTypes";

export default function useBreedList(animal: Animal) {
  const { data, status } = useQuery(["breed", animal], fetchBreedList);
  return [data?.breed ?? [], status] as [string[], QueryStatus];
}
