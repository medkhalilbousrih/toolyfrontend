import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    margin: 10,
  },
  cover: {
    width: 220,
    height: 220,
  },
  content: {
    backgroundColor: "#ffc850",
  },
});
const Tool = ({ data }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card
      className={classes.root}
      onClick={() => {
        history.push(`/product/${data.id}`);
      }}
    >
      <CardActionArea>
        <CardMedia
          className={classes.cover}
          component="img"
          alt={data.name}
          height="220"
          width="220"
          image={`${data.imageUrls[0]}`}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {data.name}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            {data.category}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            {data.price} Dinars
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Tool;
