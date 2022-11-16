import React from "react";
import "./cart.css";
import { products } from "../catalog/products_cart";
import { calculateTotal, calculatePromo } from "../../services/calculate";
import { Link } from "react-router-dom";
import {
  Grid,
  List,
  ListItem,
  Typography,
  Stack,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Cart = () => {
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
      sx={{ padding: "40px", boxSizing: "border-box" }}>

      <Grid item xs={12} md={12} lg={8} sx={{ padding: "20px!important" }}>
        <Typography
          variant="h4"
          component="h4"
          style={{ padding: "0 0 25px 50px", boxSizing: "border-box" }}
        >
          Carrinho de Compras
        </Typography>


        <div className="boxTotal">
         
         
         <List sx={{ width: "100%" }}>
            
            {Object.keys(products).map((id) => {
              return (

                <ListItem sx={{ alignItems: "center" }} className="listCart"
                  secondaryAction={
                    <IconButton sx={{ right: "16px" }} edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>} alignItems="flex-start">


                  <Stack sx={{ flexGrow: 1 }} className="stackImage">
                    <span>
                      <img src={products[id].images[0]} alt="" />
                    </span>
                  </Stack>

                  <Stack sx={{ flexGrow: 2 }} className="stackPrice">
                   
                    <Stack
                      direction="column"
                      sx={{
                        justifyContent: "center",
                        paddingLeft: "5px",
                        boxSizing: "border-box",
                        flexGrow: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          display: "inline",
                          fontWeight: "600",
                          fontSize: "1.2em",
                        }}
                        component="h6"
                        variant="h6"
                      >
                        {products[id].name}
                      </Typography> 

                      <Typography
                        sx={{
                          display: "inline",
                          fontSize: "0.9em",
                          color: "#666666",
                        }}
                        componente="p"
                        variant="p"
                      >
                        {products[id].description.substr(0, 75)}...
                      </Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      sx={{
                        alignItems: "center",
                        flexGrow: 1,
                        paddingLeft: "15px",
                        paddingRigth: "15px",
                        boxSizing: "border-box",
                      }}
                    >
                      {products[id].promo_price ? (
                        <Typography
                          sx={{
                            display: "inline",
                            color: "red",
                            fontWeight: "700",
                            fontSize: "16px",
                            paddingLeft: "5px",
                            paddingRigth: "5px",
                            boxSizing: "border-box",
                          }}
                          component="p"
                          variant="p"
                        >
                          {products[id].promo_price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </Typography>
                      ) : (
                        <span style={{ minWidth: "74px" }} />
                      )}

                      <Typography
                        sx={{
                          display: "inline",
                          paddingLeft: "5px",
                          paddiiRight: "5px",
                          boxSizing: "border-box",
                          textDecoration: products[id].promo_price
                            ? "line-through"
                            : "none",
                          fondSize: products[id].promo_price ? "12px" : "14px",
                        }}
                        component="p"
                        variant="p"
                      >
                        {products[id].price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </Typography>
                    </Stack>

                    <Stack
                      className="stackQuantity"
                      direction="row"
                      sx={{
                        alignItems: "center",
                        flexGrow: 1,
                      }}
                    >
                      <TextField
                        size="small"
                        type="number"
                        value={products[id].quantity}
                      />
                    </Stack>


                    

                  </Stack>


                </ListItem>
              );
            })}


          </List>


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
        <div
          className="boxTotal"
                  >
          <ul
            style={{
              margin: 0,
              listStyle: "none",
              paddingLeft: 0,
            }}
            className="listTotal"
          >
            <li>
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

          <Link to="/checkout">
            <Button
              style={{ backgroundColor: "#000" }}
              variant="contained"
              fullWidth
              startIcon={<AttachMoneyIcon />}
            >
              Ir para o Pagamento
            </Button>
          </Link>
        </div>

      </Grid>
    </Grid>
  );
};

export default Cart;
