import styled from "styled-components";
import Figure from "react-bootstrap/Figure";
import productService from "./services/product";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import axios from "axios";

const Map = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [tool, setTool] = useState();
  const [Img, setImg] = useState("");
  const [long, setLong] = useState(0);
  const [lat, setLat] = useState(0);

  useEffect(async () => {
    const info = await productService.getInfo(id);
    console.log(info);
    const geo = await axios.get(
      `http://api.weatherstack.com/current?access_key=aa4fdb3bf2b8f2434a6a856e58bab081&query=${info.address.city},Tunisia`
    );
    console.log(geo);
    setImg(
      `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${geo.data?.location?.lon},${geo.data?.location?.lat},12,0/300x200?access_token=pk.eyJ1IjoibGF5bXVuYSIsImEiOiJja29hem0xMjIwMzV6MnBuMmpkeHVrNmh4In0.tyRg7veN6W2xd4YvDeITyA`
    );
  }, []);

  return (
    <>
      <br />
      <h4>Tool Current Location</h4>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img width="70%" src={Img} />
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Map;
