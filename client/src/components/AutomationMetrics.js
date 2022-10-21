import { Grid, Paper, Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { metrics } from "../test/TestData";

const AutomationMetrics = () => {
  return (
    <Fragment elevation={10}>
      <Paper>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          {metrics.map((metric) => (
            <Paper
              key={metric.index}
              elevation={5}
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Box p={1} justifyContent="center" alignItems="center">
                <Typography variant="h3" gutterBottom>
                  {metric.metric}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {metric.title}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default AutomationMetrics;
