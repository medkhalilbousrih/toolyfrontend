import styled from "styled-components";
import ProductCard from "./ProductCard";
import Container from "@material-ui/core/Container";

const ProductProfile = () => {
  return (
    <>
      <Container maxWidth="lg">
        <PageView>
          <ProductCard />
        </PageView>
      </Container>
    </>
  );
};

const PageView = styled.div``;
export default ProductProfile;
