import styled from "styled-components";
import React, { useState, useEffect } from "react";
import getRandomImage from "../util/getRandomImage";

const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const RandomBg = ({ setTextColor }) => {
  const images = [
    { url: "/assets/brandStory/mainHome_bg1.webp", textColor: "#FFFFFF" },
    { url: "/assets/brandStory/mainHome_bg2.webp", textColor: "#FFFFFF" },
    { url: "/assets/brandStory/mainHome_bg3.webp", textColor: "#F4F4F4" },
    { url: "/assets/brandStory/mainHome_bg4.webp", textColor: "#FD4525" },
    { url: "/assets/brandStory/mainHome_bg5.webp", textColor: "#F4F4F4" },
    { url: "/assets/brandStory/mainHome_bg6.webp", textColor: "#FD4525" },
    { url: "/assets/brandStory/mainHome_bg7.webp", textColor: "#FD4525" },
    { url: "/assets/brandStory/mainHome_bg8.webp", textColor: "#F4F4F4" },
  ];

  const [backgroundImage, setBackgroundImage] = useState(images[0].url);

  useEffect(() => {
    const { url, textColor } = getRandomImage(images);
    setBackgroundImage(url);
    setTextColor(textColor);
  }, [setTextColor]);

  return <Background $backgroundImage={backgroundImage} />;
};

export default RandomBg;
