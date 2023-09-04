import { useLocation } from "react-router-dom";
import { useIsMobile } from "../../context/IsMobileContext";
import { HeaderTitle } from "../atoms/HeaderTitle";
import { ReturnButton } from "../atoms/ReturnButton";

export const Header = () => {
  // 1. OBTENEMOS EL PATHNAME DE LA URL
  const { pathname } = useLocation();
  // 2. DECODIFICAMOS LA URL A STRING
  const pathDecodeUri = decodeURI(pathname);
  // 3. CONSEGUIMOS EL STRING LUEGO DEL SLASH
  const characterName = pathDecodeUri.split("/").pop();

  const isMobile = useIsMobile();

  return (
    <header
      className={`w-full p-4 bg-black h-[89px] md:h-[52px] ${
        isMobile ? "flex flex-row items-center" : ""
      }`}
    >
      {isMobile && characterName && <ReturnButton />}
      <HeaderTitle title={isMobile ? characterName : ""} />
    </header>
  );
};
