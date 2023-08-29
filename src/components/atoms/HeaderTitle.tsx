import React from "react";
import { HeaderTitlePropModel } from "../../models/headerTitlePropModel";

export const HeaderTitle: React.FC<HeaderTitlePropModel> = ({ title, styles }) => {
  return (
    <h1
      className={`w-full h-full text-lg font-bold text-white flex justify-center items-center md:justify-start ${styles}`}
    >
      {title || 'People of Star Wars'}
    </h1>
  );
};
