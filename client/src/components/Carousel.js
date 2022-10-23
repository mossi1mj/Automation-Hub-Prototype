import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Chip,
  Stack,
  IconButton,
  MobileStepper,
  Typography,
  ButtonBase,
} from "@mui/material";
import { data } from "../test/TestData";
import AutomationCard from "./AutomationCard";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const Carousel = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  return (
    <Fragment>
      <Stack justifyContent="center" alignItems="center" spacing={1}>
        <Grid item>
          <Typography variant="h6">Automation Highlights</Typography>
        </Grid>
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

          <ButtonBase onClick={() => navigate("/explore")}>
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
          </ButtonBase>

          <IconButton
            onClick={() => {
              index < data.length - 1 ? setIndex(index + 1) : setIndex(0);
            }}
          >
            <KeyboardArrowRight />
          </IconButton>
        </Grid>

        <Grid item>
          <MobileStepper
            position="static"
            steps={data.length}
            activeStep={index}
            variant="dots"
            sx={{ maxWidth: 400, flexGrow: 1 }}
          />
        </Grid>
      </Stack>
    </Fragment>
  );
};

export default Carousel;
