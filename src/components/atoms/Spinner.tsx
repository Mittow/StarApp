import React from "react";
import FadeLoader from "react-spinners/ClipLoader";

interface Props {
  color: string;
  size: string;
}

export const Spinner:React.FC<Props> = ({ color, size }) => {

  return (
    <FadeLoader 
      color={color} 
      size={size}
    />
  )
}
