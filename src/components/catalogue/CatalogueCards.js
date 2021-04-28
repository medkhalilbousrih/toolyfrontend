import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Figure from "react-bootstrap/Figure";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(90),
      height: theme.spacing(20),
    },
  },
  card: {},
  Container: {},
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const CatalogueCards = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.Container}>
        <CardContainer onClick={() => {}}>
          <div className={classes.root}>
            <Paper elevation={1} className={classes.card}>
              <Contenu>
                <Img>
                  <Figure>
                    <Figure.Image
                      width={172.5}
                      height={10}
                      alt="Tool img"
                      src="/Images/hammer.PNG"
                      style={{ borderRadius: "5px 0px 0px 5px" }}
                    />
                  </Figure>
                </Img>
                <Data>
                  <DD>Tool Name</DD>
                  <DD>
                    Desciption: Desqsd qsdq fih u zgzph ôizheg iozh ugzhg hzêigh
                    ^zigh qsdq
                  </DD>
                  <DD style={{ color: " #116de5" }}>
                    <i class="fas fa-map-marker-alt"></i>
                    &nbsp; Origin Location: aze aze azeaz 64
                  </DD>
                  <DD>
                    <Av>
                      <Avatar
                        alt="Remy Sharp"
                        src="/Images/aymen.jpg"
                        className={classes.small}
                      />
                      &nbsp;&nbsp;
                      <p style={{ marginTop: "0.2rem" }}> Owner Name</p>
                    </Av>
                  </DD>
                  <DD>
                    <p style={{ marginTop: "-0.5rem" }}>Price: 30 Dinars</p>
                  </DD>
                </Data>
              </Contenu>
            </Paper>
          </div>
        </CardContainer>
      </Container>
    </>
  );
};

const CardContainer = styled.div``;
const Contenu = styled.div`
  display: flex;
`;
const Img = styled.div``;
const Data = styled.div`
  margin-left: 1.5rem;
  margin-top: 0.6rem;
`;
const DD = styled.div`
  margin-top: 0.4rem;
`;
const Av = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;
export default CatalogueCards;
