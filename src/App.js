import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Grid,
  ThemeProvider,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Logo from "./assets/img/logo-branco.png";
import JosefinSans from "./assets/fonts/JosefinSans-Regular.ttf";
import { createTheme } from "@mui/material/styles";

const Login = lazy(() => import("./pages/login/login"));
const Register = lazy(() => import("./pages/register/register"));
const Catalog = lazy(() => import("./pages/catalog/catalog"));
const Cart = lazy(() => import("./pages/cart/cart"));
const Checkout = lazy(() => import("./pages/checkout/checkout"));
const Product = lazy(() => import("./pages/product/product"));
const About = lazy(() => import("./pages/about/about"));
const NotFound = lazy(() => import("./pages/not-found/not-found"));

const theme = createTheme({
  typography: {
    fontFamily: "Josefin, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'JosefinSans';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: "local('JosefinSans'), local('JosefinSans-Regular'), url(${JosefinSans}) format('ttf')";
          unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
        }
      `,
    },
  },
});

function App() {
  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar position={"static"}>
          <Toolbar
            style={{
              justifyContent: "space-between",
              backgroundColor: "#4366ff",
            }}
          >
            <div
              style={{
                height: "125px",
                width: "250px",
              }}
            >
              <Link to="/">
                <span
                  style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={Logo}
                    alt=""
                    style={{
                      height: "75%",
                    }}
                  />
                </span>
              </Link>
            </div>
            <Typography variant="h4" component="h2">
              <Link to="/catalog">Produtos Inúteis</Link>
            </Typography>
            <div
              style={{
                width: "250px",
              }}
            >
              <IconButton edge="end">
                <Link to="/cart">
                  <ShoppingCartIcon
                    style={{
                      color: "#fff",
                      fontSize: "30px",
                    }}
                  />
                </Link>
              </IconButton>
              <IconButton
                edge="end"
                style={{
                  marginLeft: 16,
                }}
              >
                <Link to="/login">
                  <LogoutIcon
                    style={{
                      color: "#fff",
                      fontSize: "30px",
                    }}
                  />
                </Link>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        <Suspense fallback={"Carregando..."} sx={{ margin: "0px!important" }}>
          <Routes>
            <Route exact path="/" element={<Catalog />} />
            <Route exact path="/catalog" element={<Catalog />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/about" element={<About />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Grid container spacing={2} className="footer">
          <Grid item xs={12} md={3} lg={3} className="footerLinks">
            <ul className="menuBottom">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>Sobre</li>
              </Link>
              <Link to="/register">
                <li>Cadastro</li>
              </Link>
              <Link to="/login">
                <li>Login</li>
              </Link>
            </ul>
          </Grid>

          <Grid item xs={12} md={6} lg={6} className="footerSocial">
            <IconButton edge="end" className="button">
              <Link
                onClick={() =>
                  window.open(
                    "https://hypescience.com/designer-cria-belissimos-objetos-completamente-inuteis/",
                    "_blank"
                  )
                }
              >
                <div>
                  <img
                    // src={Logo}
                    alt=""
                    style={{
                      height: "1em",
                    }}
                  />
                </div>
              </Link>
            </IconButton>

            <IconButton edge="end" className="button">
              <Link
                onClick={() =>
                  window.open(
                    "https://hypescience.com/designer-cria-belissimos-objetos-completamente-inuteis/",
                    "_blank"
                  )
                }
              >
                <InstagramIcon
                  style={{
                    color: "#fff",
                  }}
                />
              </Link>
            </IconButton>

            <IconButton edge="end" className="button">
              <Link
                onClick={() =>
                  window.open(
                    "h",
                    "_blank"
                  )
                }
              >
                <YouTubeIcon
                  style={{
                    color: "#fff",
                  }}
                />
              </Link>
            </IconButton>

            <IconButton edge="end" className="button">
              <Link
                onClick={() =>
                  window.open(
                    "",
                    "_blank"
                  )
                }
              >
                <WhatsAppIcon
                  style={{
                    color: "#fff",
                  }}
                />
              </Link>
            </IconButton>
          </Grid>

          <Grid item xs={12} md={3} lg={3} className="footerLogo">
            <span
              style={{
                height: "100px",
              }}
            >
              <Link to="/">
                <img src={Logo} alt="" style={{ height: "100%" }} />
              </Link>
            </span>
          </Grid>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
