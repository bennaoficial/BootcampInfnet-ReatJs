import React from "react";
import "./about.css";

import {
  Grid,
  Typography,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Modal,
  Stack,
} from "@mui/material";

import tacaDeLado from "../../assets/img/taca-de-lado.jpg";

const About = () => {
  const [open, setOpen] = React.useState(false);
  const [productList, setProduct] = React.useState(false);
  const handleOpen = (newProduct) => {
    setOpen(true);
    setProduct(newProduct);
  };
  const handleClose = () => setOpen(false);

  return (
    <Grid
      container
      spacing={2}
      sx={{ padding: "40px", boxSizing: "border-box" }}
    >
      <Grid item xs={12} md={6} lg={8} sx={{ padding: "20px !important" }}>
        <Typography
          variant="h4"
          component="h4"
          style={{ padding: "0 0 25px 50px", boxSizing: "border-box" }}
        >
          Designer cria belíssimos objetos completamente inúteis
        </Typography>
        <div className="boxTotal">
          <Grid container spacing={2}>
            <Grid item>
            A arquiteta baseada em Atenas Katerina Kamprani dedicou sua imaginação fértil para a criação de objetos inúteis. “Todos os objetos que você vai ver são deliberadamente projetados para lhe incomodar”, escreve a artista em seu site.


            </Grid>
            <Grid item>
            São garfos com dentes e cabos moles, xícaras e copos que não podem ser utilizados sem derrubar todo o conteúdo e cadeiras que são impossíveis de se sentar. Apesar de dar um nó no cérebro, esses objetos trazem certo prazer estético, e são ótimos itens para uma exposição de arte moderna divertida ou decoração para casa.
            </Grid>
     
          </Grid>
        </div>
      </Grid>

      <Grid item xs={12} md={6} lg={4} sx={{ padding: "20px !important" }}>
        <Typography
          variant="h4"
          component="h4"
          style={{ padding: "0 0 25px 50px", boxSizing: "border-box" }}
        >
          Taça com a boca ao lado
        </Typography>
        <div className="boxTotal">

        <Stack spacing={2} className="stackImage">
          <img src={tacaDeLado} alt="Logo" />
        </Stack>

          <Typography
            spacing={2}
            variant="p"
            component="p"
            sx={{ paddingTop: "16px" }}
          >“Esse projeto começou depois que falhei em terminar meus estudos no deisgn industrial em 2011, e continuou a crescer desde então. Meu objetivo é desconstruir a linguagem do design invisível de objetos comuns e brincar com suas propriedades fundamentais para te surpreender e fazer dar risada”, explica ela.

            
          </Typography>
          <Typography variant="p" component="p" sx={{ paddingTop: "16px" }}>
           
          Outro objetivo da coleção, chamada de “O desconfortável”, é fazer com que as pessoas apreciem a complexidade e profundidade das interações com os objetos simples que nos circundam. Katerina conta que no início sua produção era apenas em imagens 3D, mas que recentemente começou a produzir protótipos. “O que seria do mundo se não houvessem objetos desconfortáveis por aí?”, questiona ela. [Bored Panda, The Uncomfortable]esão por uso excessivo, para maximizar sua diversão e
            desempenho.
          </Typography>



        </div>

      </Grid>

      
    </Grid>
  );
};

export default About;
