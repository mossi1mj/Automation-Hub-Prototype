import { Grid, Paper, Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { metrics } from "../test/TestData";

const AutomationMetrics = () => {
  return (
    <Fragment>
      <Paper elevation={10}>
        <Grid
          container
          direction="row"
          spacing={1}
          justifyContent="center"
          alignItems="center"
        >
          {metrics.map((metric) => (
            <Paper key={metric.index} elevation={5} spacing={2}>
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
