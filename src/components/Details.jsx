import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary.jsx";
import Carousel from "./Carousel.jsx";
import fetchPet from "../fetch/fetchPet.js";
import Modal from "./Modal.jsx";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
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
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
          <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
          <p>{pet.description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {pet.name}? </h1>
                <div className="buttons">
                  <button>Yes</button>
                  <button onClick={() => setShowModal(false)}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </h2>
      </div>
    </div>
  );
};

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
