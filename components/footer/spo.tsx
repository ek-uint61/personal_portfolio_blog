import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Spoti from "./spotify2";

const Spo: React.FC = () => {
  return (
    <NextUIProvider>
   
        <Spoti /> {/* Spoti bileşenini burada kullanın */}
    </NextUIProvider>
  );
};

export default Spo;
