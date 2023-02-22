import { Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect, useState } from "react";
import { getPokemons } from "../../http/getPokemons";
import { PokemonInfo } from "../PokemonInfo/PokemonInfo";
import { SideBar } from "../SideBar/SideBar";

export const AppWrapper = () => {
  const [pokemons, setPokemons] = useState(null);
  const [selectedPokemonURL, setSelectedPokemonURL] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const onPrev = () => {
    getPokemons(pokemons.previous).then((data) => setPokemons(data));
  };

  const onNext = () => {
    getPokemons(pokemons.next).then((data) => setPokemons(data));
  };

  useEffect(() => {
    getPokemons(selectedPokemonURL).then((data) => setSelectedPokemon(data));
  }, [selectedPokemonURL]);

  useEffect(() => {
    getPokemons().then((data) => setPokemons(data));
  }, []);

  return (
    <Container maxWidth="lg">
      {!pokemons ? (
        <Typography sx={{ textAlign: "center" }}>
          Pokemons are loading...
        </Typography>
      ) : (
        <Grid2 container>
          <SideBar
            pokemons={pokemons}
            onPrev={onPrev}
            onNext={onNext}
            setSelectedPokemonURL={setSelectedPokemonURL}
          />
          <PokemonInfo selectedPokemon={selectedPokemon} />
        </Grid2>
      )}
    </Container>
  );
};
