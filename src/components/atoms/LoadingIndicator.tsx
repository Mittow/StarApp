import React from "react";
import FadeLoader from "react-spinners/ClipLoader";
import { PSpinnerModel } from "../../models/p.spinner.model";

export const LoadingIndicator:React.FC<PSpinnerModel> = ({ color, size }) => {

  return (
    <FadeLoader 
      color={color} 
      size={size}
    />
  )
}