import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Button from "react-bootstrap/Button";

const useStyles = makeStyles({
  rootcard3: {
    minWidth: 382,
    maxWidth: 382,
    borderRadius: 0,
  },

  Information: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: "0.5rem",
    marginBottom: "1rem",
  },
  content: {
    marginTop: 60,
  },
});

const SupplierCard = () => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.rootcard3} variant="outlined">
        <CardContent className={classes.content}>
          <Typography className={classes.Information}>
            Information: This area is only accessible to you supplier, the sole
            owner of this tool
          </Typography>

          <Button block variant="warning">
            Modify Product
          </Button>

          <Button block variant="dark">
            Delete Product
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default SupplierCard;
