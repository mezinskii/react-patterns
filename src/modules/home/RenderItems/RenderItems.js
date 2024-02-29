import React from "react";
import { Container, Typography, Grid } from "@mui/material";

const RenderItems = ({ title, items, render }) => {
  return (
    <Container>
      <Typography variant="h3" style={{ marginBottom: "24px" }}>{title}</Typography>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid item xs={6} key={index}>
            {render(item)}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RenderItems;

