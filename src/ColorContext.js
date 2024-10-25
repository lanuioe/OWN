import React, { createContext, useContext, useState } from "react";
import { colors } from "./styles";

const MAIN_ORANGE = colors.mainOrange;

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState(MAIN_ORANGE);

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => useContext(ColorContext);
