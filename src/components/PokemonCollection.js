import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ collection }) {
  return (
    <Card.Group itemsPerRow={6}>
      {collection.map((poke) => (
        <PokemonCard 
          key={poke.id}
          name={poke.name}
          hp={poke.hp}
          sprites={poke.sprites}
        />
      ))}
    </Card.Group>
  );
}

export default PokemonCollection;
