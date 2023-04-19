import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "../fetch/fetchPet.js";

const Details = () => {
  const { id } = useParams();

  console.log(1);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["details", id],
    queryFn: fetchPet,
  });

  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="error-pane">
        <h2>Oops, something went wrong:</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  const pet = data.pets[0];

  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
          <button>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </h2>
      </div>
    </div>
  );
};

export default Details;
