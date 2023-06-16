import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [collection, setCollection] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((r) => r.json())
      .then((data) => {
        setCollection(data)
      })
  }, [])

  function filterByName(input) {
    const filteredCollection = collection.map((poke) => (
      poke.name.toLowerCase().includes(input.toLowerCase())
    ))
    setCollection(filteredCollection)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm filterByName={filterByName}/>
      <br />
      <Search />
      <br />
      <PokemonCollection collection={collection}/>
    </Container>
  );
}

export default PokemonPage;
