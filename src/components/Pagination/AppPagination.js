import { Box, Pagination, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { usePagination } from "../../hooks/usePagination";

const PER_PAGE = 3;

export const AppPagination = ({ pokemons, setPokemonsList }) => {
  const [page, setPage] = useState(1);
  const theme = useTheme();

  const count = Math.ceil(pokemons.length / PER_PAGE);
  const _DATA = usePagination(pokemons, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  useEffect(() => {
    setPokemonsList(_DATA.currentData());
  }, [page]);

  useEffect(() => {
    setPage(1);
    _DATA.jump(1);
    setPokemonsList(_DATA.currentData());
  }, [pokemons]);

  return (
    <Box
      sx={{
        marginBottom: theme.spacing(10),
      }}
    >
      <Pagination
        sx={{
          "& .MuiPaginationItem-root": {
            color: "#fff",
          },
        }}
        color={"primary"}
        count={count}
        page={page}
        variant="text"
        shape="circular"
        onChange={handleChange}
      />
    </Box>
  );
};
