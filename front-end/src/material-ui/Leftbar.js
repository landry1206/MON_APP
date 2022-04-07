import { Container, makeStyles, Typography } from "@material-ui/core";
import {
  Bookmark,
  List,
  ExitToApp,
  Home,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  Settings,
  Storefront,
  TabletMac,
} from "@material-ui/icons";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
   
    <Container className={classes.container}>
      <div className={classes.item}>
        <NavLink to="/" exact >
          <Home className={classes.icon} />
          <Typography className={classes.text}>Homepage</Typography>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/profil" exact active>
          <Person className={classes.icon} />
          <Typography className={classes.text}>Friends</Typography>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/trending" exact active ClassName="active-left-nav">
          <List className={classes.icon} />
          <Typography className={classes.text}>Lists</Typography>
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/exposition" exact activeClassName="active-left-nav">
          <PhotoCamera className={classes.icon} />
          <Typography className={classes.text}>Camera</Typography>
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/" exact activeClassName="active-left-nav">
          <PlayCircleOutline className={classes.icon} />
          <Typography className={classes.text}>Videos</Typography>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/" exact activeClassName="active-left-nav">
          <TabletMac className={classes.icon} />
          <Typography className={classes.text}>Apps</Typography>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/" exact activeClassName="active-left-nav">
          <Bookmark className={classes.icon} />
          <Typography className={classes.text}>Collections</Typography>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/" exact activeClassName="active-left-nav">
          <Storefront className={classes.icon} />
          <Typography className={classes.text}>Market Place</Typography>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/" exact activeClassName="active-left-nav">
          <Settings className={classes.icon} />
          <Typography className={classes.text}>Settings</Typography>
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/" exact activeClassName="active-left-nav">
          <ExitToApp className={classes.icon} />
          <Typography className={classes.text}>Logout</Typography>
        </NavLink>
      </div>
    </Container>
    
  );
};

export default Leftbar;
