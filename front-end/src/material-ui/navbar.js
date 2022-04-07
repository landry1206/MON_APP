import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { UidContext } from "../client/component/components/AppContext";

import {
    alpha,
    AppBar,
    Avatar,
    Badge,
    InputBase,
    makeStyles,
    Toolbar,
    Typography,
  } from "@material-ui/core";
  import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";


  const useStyles = makeStyles((theme) => ({
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    logoLg: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    logoSm: {
      display: "block",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    search: {
      display: "flex",
      alignItems: "center",
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      borderRadius: theme.shape.borderRadius,
      width: "50%",
      [theme.breakpoints.down("sm")]: {
        display: (props) => (props.open ? "flex" : "none"),
        width: "70%",
      },
    },
    input: {
      color: "white",
      marginLeft: theme.spacing(1),
    },
    cancel: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    searchButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    icons: {
      alignItems: "center",
      display: (props) => (props.open ? "none" : "flex"),
    },
    badge: {
      marginRight: theme.spacing(2),
    },
  }));
  
  const Navbar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({ open });
    const uid = useContext(UidContext);
    const userData = useSelector((state) => state.userReducer);
  
    return (
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.logoLg}>
            MUSEE 237
          </Typography>
          <Typography variant="h6" className={classes.logoSm}>
            MUSEE 237
          </Typography>
          
          <div className={classes.icons}>
            <Badge badgeContent={2} color="secondary" className={classes.badge}>
              <Notifications />
            </Badge>
            <li className="welcome">
              <NavLink exact to="/profil">
                <h5>Bienvenue {userData.pseudo}</h5>
              </NavLink>
            </li>
            <Avatar
              alt="Remy Sharp"
              src={userData.picture}
            />
          </div>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navbar;