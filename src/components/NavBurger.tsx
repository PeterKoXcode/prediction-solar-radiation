import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import "../fonts.css";

const pages = ["About"];

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden">
      <div style={{ display: "flex" }} className="mt-1">
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        <ImageList
          sx={{
            width: 40,
            height: 40,
            display: { xs: "flex", md: "none" },
            mr: 1,
            my: "auto",
          }}
        >
          <ImageListItem>
            <img alt="" src="./images/dp_icon_centered.png" />
          </ImageListItem>
        </ImageList>

        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "NOHEMI",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            my: "auto",
          }}
        >
          PROJECT SOLAR
        </Typography>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-4 bg-neutral-950 border-b border-b-white/20"
          >
            {pages.map((page) => {
              return (
                <Link
                  style={{
                    display: "flex",
                    textDecoration: "none",
                    color: "white",
                  }}
                  to={`/${page}`}
                >
                  {page}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
