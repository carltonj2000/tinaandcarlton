import React, { Component } from "react";
import styled from "styled-components";

import Photos from "./components/Photos.js";
import PhotoModal from "./components/PhotoModal.js";
const { images } = require("./scripts/images");
const { photos } = require("./components/images");

const Header = styled.div`
  background: darkgoldenrod;
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  justify-content: center;
`;

class App extends Component {
  state = { isOpen: false, img: "", imgIdx: -1 };
  openModal = img => {
    window.scrollTo(0, 0);
    console.log(img);
    const imgIdx = images.findIndex(element => element.name === img);
    return this.setState({ isOpen: true, img: photos[imgIdx], imgIdx: imgIdx });
  };
  closeModal = () => this.setState({ isOpen: false });
  nextImg = by =>
    this.setState(state => {
      let imgIdx = (state.imgIdx + by) % images.length;
      if (imgIdx < 0) imgIdx = images.length - 1;
      return { img: photos[imgIdx], imgIdx: imgIdx };
    });
  render = () => {
    return (
      <div className="App">
        <PhotoModal
          show={this.state.isOpen}
          onClose={this.closeModal}
          img={this.state.img}
          nextImg={this.nextImg}
        />
        <div>
          <Header>Carlton &amp; Tina's Wedding Picture Ideas</Header>
          <Photos images={images} photoModalOpen={this.openModal} />
        </div>
      </div>
    );
  };
}

export default App;
