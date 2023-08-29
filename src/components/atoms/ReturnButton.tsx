import { Link } from "react-router-dom";

export const ReturnButton = () => {
  return (
    <Link to={"/"} className="font-bold text-xl text-white w-6">
      {"<"}
    </Link>
  );
};
