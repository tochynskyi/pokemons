import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Button, Link, Stack, Typography } from "@mui/material";

export const SideBar = ({
  pokemons,
  setSelectedPokemonURL,
  onPrev,
  onNext,
}) => {

  if (!pokemons) {
    return <Typography>Pokemons are loading...</Typography>;
  }

  return (
    <Grid2 xs={5}>
      <Stack>
        {pokemons.results.map((item) => (
          <Link onClick={() => setSelectedPokemonURL(item.url)} key={item.name}>
            {item.name}
          </Link>
        ))}
      </Stack>
      <Button disabled={!pokemons.previous} onClick={() => onPrev()}>Prev</Button>
      <Button disabled={!pokemons.next} onClick={() => onNext()}>Next</Button>
    </Grid2>
  );
};
