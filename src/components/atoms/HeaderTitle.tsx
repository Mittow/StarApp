import React from "react";
import { PHeaderTitleModel } from "../../models/p.header.title.model";

export const HeaderTitle: React.FC<PHeaderTitleModel> = ({ title, styles }) => {
  return (
    <h1
      className={`w-full h-full text-lg font-bold text-white flex justify-center items-center md:justify-start ${styles}`}
    >
      {title || 'People of Star Wars'}
    </h1>
  );
};
