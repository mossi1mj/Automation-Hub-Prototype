import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Paper,
  CardActions,
  Box,
} from "@mui/material";

const AutomationCard = ({
  image,
  title,
  description,
  labels,
  score,
  name,
  role,
  occupation,
  profile,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar alt="Python" src={image} sx={{ width: 56, height: 56 }} />
        }
        title={
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="subtitle1">Description:</Typography>
        <Paper
          variant="outlined"
          style={{
            borderLeft: "5px solid purple",
            borderColor: "purple",
          }}
        >
          <Box p={1}>
            <Typography varient="body1" gutterBottom>
              {description}
            </Typography>
          </Box>
        </Paper>
      </CardContent>
      <CardActions>{labels}</CardActions>
      <CardHeader
        avatar={
          <Typography
            variant="h6"
            display="block"
            gutterBottom
            style={{ color: "green" }}
          >
            +{score}
          </Typography>
        }
        action={
          <Avatar
            variant="square"
            alt="Python"
            src={profile}
            sx={{ width: 80, height: 80 }}
          />
        }
        title={
          <Typography variant="h6" align="right" paddingRight={1} gutterBottom>
            {name}
          </Typography>
        }
        subheader={
          <Typography
            variant="body2"
            align="right"
            paddingRight={1}
            gutterBottom
          >
            {role} -
            <br />
            {occupation}
          </Typography>
        }
      />
    </Card>
  );
};

export default AutomationCard;
