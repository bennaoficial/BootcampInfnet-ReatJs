import React from "react";
import "./not-found.css";
import { Grid, Typography } from "@mui/material";
import ImageNotFound from "../../assets/img/not-found.png";


const NotFound = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: "40px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Grid item xs={12} md={12} lg={12} sx={{ padding: "20px !important", textAlign: "center" }}>
        <Typography variant="h2" component="h2">
          Erro no Preenchimento!
        </Typography>
      </Grid>

      <Grid item xs={12} md={12} lg={12} sx={{ padding: "20px !important", textAlign: "center"  }}>
        <spam style={{width: "50%"}}>
          <img
            src={ImageNotFound}
            alt=""
            style={{
              width: "50%",
            }}
          />
        </spam>
      </Grid>

      <Grid item xs={12} md={12} lg={12} sx={{ padding: "20px !important", textAlign: "center"  }}>
        <Typography variant="h4" component="h4">
          Mais inútil que os produtos, ein?!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NotFound;
