import { useIsMobile } from "../../context/IsMobile";
import { PeopleList } from "../organisms/PeopleList";
import { Outlet } from "react-router-dom";

export const HomePage = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="p-0 flex flex-row md:flex-grow ">
        <PeopleList />
        { !isMobile ? <Outlet /> : '' }
      </main>
    </div>
  );
};
