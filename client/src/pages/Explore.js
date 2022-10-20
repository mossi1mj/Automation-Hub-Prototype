import React from "react";
import { data } from "../test/TestData";
import AutomationCard from "../components/AutomationCard";
import { Grid, Stack, Chip } from "@mui/material";

const Explore = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {data.map((item) => (
        <AutomationCard
          key={item.index}
          image={item.image}
          title={item.title}
          description={item.description}
          labels={item.labels.map((item) => (
            <Stack key={item.key} direction="row" spacing={2}>
              <Chip
                label={item.label}
                style={{ backgroundColor: item.color }}
              />
            </Stack>
          ))}
          score={item.score}
          name={item.name}
          role={item.role}
          occupation={item.occupation}
          profile={item.profile}
        />
      ))}
    </Grid>
  );
};

export default Explore;
