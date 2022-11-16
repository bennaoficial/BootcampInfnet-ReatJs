import React from "react";
import { products, categories } from "./products";
import { Button, Grid, Typography } from "@mui/material";
import "./catalog.css";
import { Link } from "react-router-dom";
import SchoolIcon from '@mui/icons-material/School';
import Carousel from "nuka-carousel/lib/carousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Catalog = () => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={12} className="carouselGrid">
        <Carousel
          xs={12}
          sm={12}
          md={12}
          lg={12}
          adaptiveHeight="true"
          autoplay="false"
          autoplayInterval="3000"
          wrapAround="true"
          className="carousel"
          renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
            <button
              onClick={previousSlide}
              disabled={previousDisabled}
              className="carousel-button-left">
              <ArrowBackIosIcon className="arrow" />
            </button>
          )}
          renderCenterRightControls={({ nextDisabled, nextSlide }) => (
            <button
              onClick={nextSlide}
              disabled={nextDisabled}
              className="carousel-button-rigth"
            >
              <ArrowForwardIosIcon className="arrow" />
            </button>
          )}
        >
          <div
            className="spanImgSlider"
            style={{
              backgroundImage: `url("../assets/img/wall/wallpaper-001.jpg")`,
            }}
          >
            <div>
              <h2>Canecas Gêmeas</h2>
             
            </div>
          </div>

          <div
            className="spanImgSlider"
            style={{
              backgroundImage: `url("../assets/img/wall/wallpaper-002.jpg")`,
            }}
          >
            <div>
              <h2>Maçaneta Inflável</h2>
            
            </div>
          </div>

          <div
            className="spanImgSlider"
            style={{
              backgroundImage: `url("../assets/img/wall/wallpaper-003.jpg")`,
            }}
          >
            <div>
              <h2>Porta Tempero, sem refil</h2>
             
            </div>
          </div>

        </Carousel>
      </Grid>

      <Grid
        container
        spacing={4}
        sx={{
          marginTop: "100px",
          paddingLeft: "40px",
          paddingRight: "40px",
          boxSizing: "border-box",
        }}
      >
        {Object.keys(products).map((id) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} className="catalog-item">
              <span className="badge-item">
                <p>{products[id].percent}%</p>
              </span>

              <img src={products[id].images[0]} alt="" />

              {products[id].categories.map((categoryId) => {
                return (
                  <span className="category-label">
                    {categories[categoryId].name}
                  </span>
                );
              })}

              <Typography variant="h5" component="h2">
                {products[id].name}
              </Typography>

              {products[id].promo_price ? (
                <Typography variant="p" component="p" className="promo_price">
                  {products[id].promo_price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Typography>
              ) : (
                ""
              )}
              <Typography
                variant="p"
                component="p"
                className="price"
                style={{
                  fontSize: products[id].promo_price ? "16px" : "20px",
                  color: products[id].promo_price ? "#a9a9a9" : "#333333",
                  textDecoration: products[id].promo_price
                    ? "line-through"
                    : "none",
                }}
              >
                {products[id].price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Typography>

              <Typography variant="p" component="p">
                {products[id].description.substring(0, 100)}...
              </Typography>

              <Link to={"../product/" + id}>
                <Button
                  style={{ backgroundColor: "#000" }}
                  fullWidth
                  variant="contained"
                  startIcon={<SchoolIcon />}
                >
                  Saiba Mais
                </Button>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Catalog;
