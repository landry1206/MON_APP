import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography,
  } from "@material-ui/core";
  
  const useStyles = makeStyles((theme) => ({
    card: {
      marginBottom: theme.spacing(5),
    },
    media: {
      height: 250,
      [theme.breakpoints.down("sm")]: {
        height: 150,
      },
    },
  }));
  
  const Post = () => {
    const classes = useStyles();
    return (
      <Card className={classes.card}>
        <Typography gutterBottom variant="h5">
              {title}
            </Typography>
        <CardActionArea>
          <CardMedia className={classes.media} image={pict} title="My Post" />
        </CardActionArea>
        <CardContent>
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              consectetur earum est.
            </Typography>
          </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  };
  
  export default Post;