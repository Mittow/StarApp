import React from "react";
import FadeLoader from "react-spinners/ClipLoader";
import { SpinnerPropModel } from "../../models/spinnerPropModel";

export const LoadingIndicator:React.FC<SpinnerPropModel> = ({ color="#828282" , size="20px" }) => {

  return (
    <FadeLoader 
      color={color} 
      size={size}
    />
  )
}