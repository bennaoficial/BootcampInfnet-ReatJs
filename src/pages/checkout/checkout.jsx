import React from "react";
import "./checkout.css";
import { calculateTotal, calculatePromo } from "../../services/calculate";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Link } from "react-router-dom";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { products } from "../catalog/products_cart";

const Checkout = () => {
  const variantType = "filled";

  function formatD() {
    let today = new Date();
    let mes = today.getMonth() + 1;
    return `${today.getFullYear()}-${("0" + mes).slice(-2)}-${(
      "0" + today.getDate()
    ).slice(-2)}`;
  }

  const totals = Object.keys(products).map((id) => {
    return [
      products[id].price * products[id].quantity,
      products[id].promo_price * products[id].quantity,
    ];
  });

  const total = calculateTotal(totals);
  const totalPromo = calculatePromo(totals);

  const discount = (total - totalPromo) * 0.1;

  return (
    <Grid
      container
      spacing={2}
      sx={{ padding: "40px", boxSizing: "border-box" }}
      >
      <Grid item xs={12} md={12} lg={8} sx={{ padding: "20px!important" }}>
        <Typography
          variant="h4"
          component="h4"
          style={{ padding: "0 0 25px 50px", boxSizing: "border-box" }}
        >
          Informações Pessoais
        </Typography>
        <div className="boxTotal">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant={variantType}
                    label="Nome"
                    type="text"
                    inputProps={{style: {fontFamily: "Josefin Sans"}}}

                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant={variantType}
                    label="Sobrenome"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant={variantType}
                    label="CPF"
                    type="tel"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant={variantType}
                    label="Telefone"
                    type="tel"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant={variantType}
                    label="E-mail"
                    type="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    fullWidth
                    variant={variantType}
                    label="Endereço"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12} sm={3} md={2}>
                  <TextField
                    fullWidth
                    variant={variantType}
                    label="Número"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12} sm={3} md={2}>
                  <TextField
                    fullWidth
                    variant={variantType}
                    label="Complemento"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <TextField
                    fullWidth
                    variant={variantType}
                    label="CEP"
                    type="tel"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    variant={variantType}
                    label="Bairro"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    variant={variantType}
                    label="Cidade"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    variant={variantType}
                    label="Estado"
                    type="text"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                component="h4"
                style={{ padding: "25px 0 25px 30px", boxSizing: "border-box" }}
              >
                Detalhes do Pagamento
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant={variantType}
                    label="Nome impresso no cartão"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant={variantType}
                    label="Número do cartão"
                    type="tel"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant={variantType}
                    label="Código de seg."
                    size="small"
                    type="password"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant={variantType}
                    label="Data de vencimento"
                    size="small"
                    type="date"
                    value={formatD()}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Grid>

      <Grid item xs={12} md={12} lg={4} sx={{ padding: "20px!important" }}>
        <Typography
          variant="h4"
          component="h4"
          style={{ padding: "0 0 25px 50px", boxSizing: "border-box" }}
        >
          Resumo do Pedido
        </Typography>

        <div className="boxCheckout">
          
            <ul
              style={{
                margin: 0,
                listStyle: "none",
                paddingLeft: 0,
              }}
              className="listCheckout"
            >
              {Object.keys(products).map((id, idx) => {
                return (
                  <li key={idx}>
                    <span>{products[id].name}</span>
                    <span>
                      {products[id].promo_price
                        ? products[id].promo_price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })
                        : products[id].price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                    </span>
                  </li>
                );
              })}
              <li style={{ borderTop: "1px solid black" }}>
                <span>Total: </span>
                <span>
                  {total.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </li>
              <li>
                <span>Promoção: </span>
                <span>
                  {totalPromo.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </li>
              <li>
                <span>Subtotal: </span>
                <span>
                  {(total - totalPromo).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </li>

              <li style={{ borderTop: "1px solid black" }}>
                <span>Desconto: </span>
                <span>
                  {discount.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </li>

              <li>
                <span>Valor Final: </span>
                <span>
                  {(total - totalPromo - discount).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </li>
            </ul>

            <Link to="/thanks">
              <Button
                style={{ backgroundColor: "#000" }}
                variant="contained"
                fullWidth
                startIcon={<AttachMoneyIcon />}
              >
                Confirmar o pagamento
              </Button>
            </Link>

          
        </div>
      </Grid>
    </Grid>
  );
};

export default Checkout;
