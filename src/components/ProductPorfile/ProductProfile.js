import styled from "styled-components";
import ProductCard from "./ProductCard";
import Container from "@material-ui/core/Container";
import BasicInfos from "./BasicInfos";

const ProductProfile = () => {
  return (
    <>
      <Container maxWidth="lg">
        <PageView>
          <ProductCard />
          <BasicInfos />
        </PageView>
      </Container>
    </>
  );
};

const PageView = styled.div``;
export default ProductProfile;
