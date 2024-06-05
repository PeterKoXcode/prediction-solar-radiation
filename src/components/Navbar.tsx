import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "../fonts.css";
import { NavMobile } from "./NavBurger";

const pages = ["Home", "About"];

export function Navbar() {
  return (
    <AppBar position="static" style={{ backgroundColor: "#0F1923"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ImageList
            sx={{
              width: 40,
              height: 40,
              display: { xs: "none", md: "flex" },
              mr: 1,
              my: "auto",
            }}
          >
            <ImageListItem>
              <img alt="" src="./images/dp_icon_centered.png" />
            </ImageListItem>
          </ImageList>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "NOHEMI",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PROJECT SOLAR
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <NavMobile />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontFamily: "NOHEMI",
                  }}
                  to={`/${page}`}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
