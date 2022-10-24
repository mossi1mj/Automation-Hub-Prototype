import React, { Fragment, useState } from "react";
import { data } from "../test/TestData";
import AutomationCard from "../components/AutomationCard";
import {
  Grid,
  Stack,
  Chip,
  TextField,
  InputAdornment,
  Box,
} from "@mui/material";
import { Search } from "@mui/icons-material";

const Explore = () => {
  const [search, setSearch] = useState("");

  return (
    <Fragment>
      <Box component="form">
        <TextField
          onChange={(e) => setSearch(e.target.value)}
          variant="filled"
          size="small"
          margin="normal"
          label="Search"
          type="search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Grid container padding={1} spacing={1.5}>
        {data
          .filter((data) => {
            if (data === "") return false;
            if (
              data.description
                .toLowerCase()
                .includes(search.toLocaleLowerCase())
            )
              return true;
          })
          .map((data) => (
            <Grid item key={data.index}>
              <AutomationCard
                image={data.image}
                title={data.title}
                description={data.description}
                labels={data.labels.map((data) => (
                  <Stack key={data.key} direction="row" spacing={2}>
                    <Chip
                      label={data.label}
                      style={{ backgroundColor: data.color }}
                    />
                  </Stack>
                ))}
                score={data.score}
                name={data.name}
                role={data.role}
                occupation={data.occupation}
                profile={data.profile}
              />
            </Grid>
          ))}
      </Grid>
    </Fragment>
  );
};

export default Explore;
