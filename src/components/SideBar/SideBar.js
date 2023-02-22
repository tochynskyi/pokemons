import { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { AppPagination } from "../Pagination/AppPagination";
import { useTheme } from "@mui/material";

export const SideBar = ({
  pokemons,
  setSelectedPokemonURL,
  onPrev,
  onNext,
}) => {
  const [pokemonsList, setPokemonsList] = useState([]);
  const theme = useTheme();

  return (
    <Grid2
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(8),
        backgroundColor: theme.palette.primary.light,
      }}
      xs={6}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
          marginBottom: theme.spacing(10),
        }}
      >
        {pokemonsList.map((item) => (
          <ListItem
            sx={{
              marginX: theme.spacing(3),
              marginY: theme.spacing(3),
              border: 1,
              borderColor: theme.palette.primary.contrastText,
              width: "auto",
              cursor: "pointer",
            }}
            onClick={() => setSelectedPokemonURL(item.url)}
            key={item.name}
          >
            <Typography
              variant="textLg"
              sx={{
                color: theme.palette.primary.contrastText,
                textTransform: "uppercase",
              }}
            >
              {item.name}
            </Typography>
          </ListItem>
        ))}
      </List>
      <AppPagination
        pokemons={pokemons.results}
        setPokemonsList={setPokemonsList}
      />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Button
          variant="contained"
          sx={{
            marginX: theme.spacing(5),
          }}
          disabled={!pokemons.previous}
          onClick={() => onPrev()}
        >
          Prev
        </Button>
        <Button
          variant="contained"
          sx={{
            marginX: theme.spacing(5),
          }}
          disabled={!pokemons.next}
          onClick={() => onNext()}
        >
          Next
        </Button>
      </Box>
    </Grid2>
  );
};
