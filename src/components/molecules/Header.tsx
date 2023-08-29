import { useIsMobile } from "../../context/IsMobile";
import { HeaderTitle } from "../atoms/HeaderTitle"
import { ReturnButton } from "../atoms/ReturnButton";


export const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className={`w-full p-4 bg-black h-[89px] md:h-[52px] ${ isMobile ? 'flex flex-row items-center' : '' }`}>
      { 
        isMobile ? <ReturnButton /> : ''
      }
      <HeaderTitle title={''} />
    </header>
  )
}
