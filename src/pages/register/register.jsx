import React, { useState } from "react";
import "../../assets/css/auth.css";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import {
  Grid,
  TextField,
  Button,
  Stack,
  InputAdornment,
  OutlinedInput,
  IconButton,
  FormControl,
  InputLabel,
} from "@mui/material";
import CoffeeIcon from '@mui/icons-material/Coffee';
import DiamondIcon from '@mui/icons-material/Diamond';
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";

const Register = () => {
  const [visibilityToggle, setVisibilityToggle] = useState(false);

  const toggleVisibility = () => {
    setVisibilityToggle(!visibilityToggle);
  };

  return (
    <Grid container spacing={2} className="authTotal">


      <Grid item className="rigthSide" xs={12} md={4} lg={4}>
        <Stack spacing={2} className="formCenter">

        <span style={{ width: "120px"}}>
          <Link to="/">
          <img src={logo} style={{ width: "120px" }} alt="Logo" />
          </Link>
          </span>


          <h1>Compre Batom!</h1>
          <Grid container>
            <Grid item xs={12} sx={{ marginBottom: "16px" }}>
              <TextField style={{backgroundColor:"white", borderRadius: "5px"}}
                fullWidth="true"
                label="Usuário"
                type="text"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sx={{ marginBottom: "16px" }}>
              <TextField
              style={{backgroundColor:"white", borderRadius: "5px"}}
                fullWidth="true"
                label="E-mail"
                type="email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: "16px" }}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel>Senha</InputLabel>
                <OutlinedInput style={{backgroundColor:"white", borderRadius: "5px"}}
                  color="primary"
                  fullWidth="true"
                  label="Senha"
                  type={visibilityToggle ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Exibir"
                        onClick={toggleVisibility}
                      >
                        {visibilityToggle ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sx={{ margimBottom: "16px" }}>
              <TextField style={{backgroundColor:"white", borderRadius: "5px"}}
                color="primary"
                fullWidth="true"
                label="Confirmar"
                type={visibilityToggle ? "text" : "password"}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sx={{ marginTop: "16px"}}>
              <Button
                fullWidth="true"
                variant="contained"
                endIcon={<DiamondIcon />}
              >
                Cadastrar
              </Button>
            </Grid>

            <Grid item xs={12} sx={{ marginTop: "16px", marginBottom: "16px"}}>
              <Link to="/login">
                <Button
                  fullWidth="true"
                  variant="contained"
                  endIcon={<CoffeeIcon />}
                >
                  Entrar
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Register;
