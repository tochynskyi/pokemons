import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect, useState } from "react";
import { getPokemons } from "../../http/getPokemons";
import { PokemonInfo } from "../PokemonInfo/PokemonInfo";
import { SideBar } from "../SideBar/SideBar";

export const AppWrapper = () => {
  const [pokemons, setPokemons] = useState(null);
  const [selectedPokemonURL, setSelectedPokemonURL] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  console.log(pokemons);

  const onPrev = () => {
    getPokemons(pokemons.previous).then((data) => setPokemons(data));
  };

  const onNext = () => {
    getPokemons(pokemons.next).then((data) => setPokemons(data));
  };

  useEffect(() => {
    getPokemons().then((data) => setPokemons(data));
  }, []);

  useEffect(() => {
    getPokemons(selectedPokemonURL).then((data) => setSelectedPokemon(data));
  }, [selectedPokemonURL]);

  return (
    <Grid2 container>
      <SideBar
        pokemons={pokemons}
        onPrev={onPrev}
        onNext={onNext}
        setSelectedPokemonURL={setSelectedPokemonURL}
      />
      <PokemonInfo selectedPokemon={selectedPokemon} />
    </Grid2>
  );
};
