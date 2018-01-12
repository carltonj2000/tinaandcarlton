import React from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  z-index: 9998;
  position: absolute;
  width: calc(100vw - 5px);
  height: calc(100vh - 5px);
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
`;
const Button = styled.button`
  padding: 10px;
  margin-left: 10px;
`;
export default props => {
  if (!props.show) return null;
  return (
    <Backdrop>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-end",
          zIndex: 9999,
          position: "absolute",
          top: "5vh",
          left: "5vw",
          width: "85vw",
          height: "85vh",
          backgroundImage: "url(" + props.img + ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          border: "5px solid darkgoldenrod"
        }}
      >
        <div className="close">
          <Button onClick={props.onClose}>X</Button>
        </div>
        <div className="next">
          <Button onClick={() => props.nextImg(-1)}>&larr;</Button>
          <Button onClick={() => props.nextImg(1)}>&rarr;</Button>
        </div>
      </div>
    </Backdrop>
  );
};
