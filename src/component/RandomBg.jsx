import styled from "styled-components";
import React, { useState, useEffect } from "react";
import getRandomImage from "../util/getRandomImage";
import img1 from "../assets/brandStory/mainHome_bg1.webp";
import img2 from "../assets/brandStory/mainHome_bg2.webp";
import img3 from "../assets/brandStory/mainHome_bg3.webp";
import img4 from "../assets/brandStory/mainHome_bg4.webp";
import img5 from "../assets/brandStory/mainHome_bg5.webp";
import img6 from "../assets/brandStory/mainHome_bg6.webp";
import img7 from "../assets/brandStory/mainHome_bg7.webp";
import img8 from "../assets/brandStory/mainHome_bg8.webp";

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
    { url: img1, textColor: "#FFFFFF" },
    { url: img2, textColor: "#FFFFFF" },
    { url: img3, textColor: "#F4F4F4" },
    { url: img4, textColor: "#FD4525" },
    { url: img5, textColor: "#F4F4F4" },
    { url: img6, textColor: "#FD4525" },
    { url: img7, textColor: "#FD4525" },
    { url: img8, textColor: "#F4F4F4" },
  ];

  const [backgroundImage, setBackgroundImage] = useState(images[0].url);

  useEffect(() => {
    const { url, textColor } = getRandomImage(images);
    setBackgroundImage(url);
    setTextColor(textColor);
    console.log("Image URL:", url);
  }, [setTextColor]);

  return <Background $backgroundImage={backgroundImage} />;
};

export default RandomBg;
