import React, { Fragment, useState } from "react";
import { Grid, Chip, Stack, IconButton, MobileStepper } from "@mui/material";
import { data } from "../test/TestData";
import AutomationCard from "./AutomationCard";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  return (
    <Fragment>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <IconButton
          onClick={() => {
            index > 0 ? setIndex(index - 1) : setIndex(data.length - 1);
          }}
        >
          <KeyboardArrowLeft />
        </IconButton>
        <AutomationCard
          image={data[index].image}
          title={data[index].title}
          description={data[index].description}
          labels={data[index].labels.map((item) => (
            <Stack key={item.key} direction="row" spacing={2}>
              <Chip
                label={item.label}
                style={{ backgroundColor: item.color }}
              />
            </Stack>
          ))}
          score={data[index].score}
          name={data[index].name}
          role={data[index].role}
          occupation={data[index].occupation}
          profile={data[index].profile}
        />
        <IconButton
          onClick={() => {
            index < data.length - 1 ? setIndex(index + 1) : setIndex(0);
          }}
        >
          <KeyboardArrowRight />
        </IconButton>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <MobileStepper
          position="static"
          steps={data.length}
          activeStep={index}
          variant="dots"
          sx={{ maxWidth: 400, flexGrow: 1 }}
        />
      </Grid>
    </Fragment>
  );
};

export default Carousel;
