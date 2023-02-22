import { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {
  Button,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { AppPagination } from "../Pagination/AppPagination";

export const SideBar = ({
  pokemons,
  setSelectedPokemonURL,
  onPrev,
  onNext,
}) => {
  const [pokemonsList, setPokemonsList] = useState([]);

  if (!pokemons) {
    return <Typography>Pokemons are loading...</Typography>;
  }

  return (
    <Grid2 xs={5}>
      <List>
        {pokemonsList.map((item) => (
          <ListItem
            onClick={() => setSelectedPokemonURL(item.url)}
            key={item.name}
          >
            {item.name}
          </ListItem>
        ))}
      </List>
      <AppPagination
        pokemons={pokemons.results}
        setPokemonsList={setPokemonsList}
      />
      <Button disabled={!pokemons.previous} onClick={() => onPrev()}>
        Prev
      </Button>
      <Button disabled={!pokemons.next} onClick={() => onNext()}>
        Next
      </Button>
    </Grid2>
  );
};
