import React from "react";

interface Props {
  title: string;
  styles?: string;
}

export const HeaderTitle: React.FC<Props> = ({ title, styles }) => {
  return (
    <h1
      className={`w-full h-full text-lg font-bold text-white flex justify-center items-center md:justify-start ${styles}`}
    >
      {title}
    </h1>
  );
};
