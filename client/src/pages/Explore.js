import React, { Fragment } from "react";
import { data } from "../test/TestData";
import AutomationCard from "../components/AutomationCard";
import { Grid, Stack, Chip, Paper } from "@mui/material";

const Explore = () => {
  return (
    <Fragment>
      {data.map((item) => (
        <Grid container padding={1}>
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
        </Grid>
      ))}
    </Fragment>
  );
};

export default Explore;
