import React, { Component } from "react";
import styled from "styled-components";

import Photos from "./components/Photos.js";
import PhotoModal from "./components/PhotoModal.js";
const { images, images2, images3 } = require("./scripts/images");
const { photos, photos2, photos3 } = require("./components/images");

const Header = styled.div`
  background: darkgoldenrod;
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  justify-content: center;
`;

class App extends Component {
  state = { isOpen: false, img: "", imgIdx: -1, photos: [], images: [] };
  openModal = (img, photos, images) => {
    window.scrollTo(0, 0);
    console.log(img);
    const imgIdx = images.findIndex(element => element.name === img);
    return this.setState({
      isOpen: true,
      img: photos[imgIdx].name,
      images: images,
      photos: photos,
      imgIdx: imgIdx
    });
  };
  closeModal = () => this.setState({ isOpen: false });
  nextImg = (by, images) =>
    this.setState(state => {
      let imgIdx = (state.imgIdx + by) % images.length;
      if (imgIdx < 0) imgIdx = images.length - 1;
      return { img: state.photos[imgIdx].name, imgIdx: imgIdx };
    });
  render = () => {
    return (
      <div className="App">
        <PhotoModal
          show={this.state.isOpen}
          onClose={this.closeModal}
          img={this.state.img}
          imgs={this.state.img}
          nextImg={this.nextImg}
        />
        <div>
          <Header>Carlton &amp; Tina's Wedding Picture Ideas</Header>
          <Photos
            images={images}
            photos={photos}
            photoModalOpen={this.openModal}
          />
          <Photos
            images={images2}
            photos={photos2}
            photoModalOpen={this.openModal}
          />
          <Photos
            images={images3}
            photos={photos3}
            photoModalOpen={this.openModal}
          />
        </div>
      </div>
    );
  };
}

export default App;
