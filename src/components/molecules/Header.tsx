import { useIsMobile } from "../../context/IsMobile";
import { HeaderTitle } from "../atoms/HeaderTitle"
import { useNavigate } from "react-router-dom";

interface PHeader {
  name?: string | undefined;
}

export const Header: React.FC<PHeader> = ({ name }) => {

  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const returnHomePage = () => {
    navigate('/')
  }

  return (
    <header className={`w-full p-4 bg-black h-[89px] md:h-[52px] ${ isMobile ? 'flex flex-row items-center' : '' }`}>
      { 
        isMobile ? 
          (
            <button 
              className="font-bold text-xl text-white w-6"
              onClick={returnHomePage}
            >
              { '<' }
            </button>
          ) : ''
      }
      <HeaderTitle title={name} />
    </header>
  )
}
