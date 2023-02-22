import { Avatar, Box, Typography, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const PokemonInfo = ({ selectedPokemon }) => {
  const theme = useTheme();
  const { sprites, name, abilities, types } = selectedPokemon;
  const pokemonAvatar = sprites && Object.values(sprites)[0];

  if (!selectedPokemon.id) {
    return (
      <Grid2
        sx={{
          display: "flex",
          alignItems: "center",
			 justifyContent: "center",
        }}
        xs={6}
      >
        <Typography sx={{ textAlign: "center" }}>No pokemon!</Typography>
      </Grid2>
    );
  }
  return (
    <Grid2
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: theme.spacing(10),
      }}
      xs={6}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: theme.spacing(10),
        }}
      >
        <Avatar
          alt="Avatar"
          src={pokemonAvatar}
          sx={{
            width: 150,
            height: 150,
            border: 1,
            borderRadius: 0,
            marginRight: theme.spacing(10),
          }}
        />
        <Typography variant="title" sx={{ textTransform: "uppercase" }}>
          Name: {name}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: theme.spacing(5),
            marginX: theme.spacing(8),
          }}
        >
          <Typography variant="subtitle">Abilities:</Typography>
          {abilities.map(({ ability }) => (
            <Typography key={ability.name} variant="textMd">
              {ability.name}
            </Typography>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: theme.spacing(5),
            marginX: theme.spacing(8),
          }}
        >
          <Typography variant="subtitle">Types:</Typography>
          {types.map(({ type }) => (
            <Typography key={type.name} variant="textMd">
              {type.name}
            </Typography>
          ))}
        </Box>
      </Box>
    </Grid2>
  );
};
