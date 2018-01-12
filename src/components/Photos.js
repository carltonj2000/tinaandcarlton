import React from "react";
import styled from "styled-components";
import { photos } from "./images.js";

const Photos = styled.div`
  background: lightblue;
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
const Img = styled.img`
  width: 100%;
`;

export default ({ photoModalOpen, images }) => (
  <Photos>
    {images.map((img, idx) => (
      <div key={`${img.name}`}>
        <Img
          src={photos[idx]}
          alt={img.text}
          onClick={() => photoModalOpen(img.name)}
        />
      </div>
    ))}
  </Photos>
);
