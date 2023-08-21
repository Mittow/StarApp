import { HeaderTitle } from "../atoms/HeaderTitle"

interface PHeader {
  name?: string | undefined;
  isMobile?: boolean;
}

export const Header: React.FC<PHeader> = ({ name, isMobile }) => {

  const handleReload = () => {
    window.location.reload(); // Recarga la página
  };

  return (
    <header className={`w-full p-4 bg-black h-[89px] md:h-[52px] ${ isMobile ? 'flex flex-row items-center' : '' }`}>
      { 
        !isMobile ? '' : (
          <button 
            className="font-bold text-2xl text-white h-full flex justify-center items-center"
            onClick={handleReload}
          >
            { '<' }
          </button>
        )
      }
      <HeaderTitle title={name} />
    </header>
  )
}
