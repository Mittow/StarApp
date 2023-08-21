import React from 'react';
import { Header } from '../molecules/Header'
import { PeopleList } from '../organisms/PeopleList'
import { PersonDetail } from '../organisms/PersonDetail'
import { PeopleModel } from '../../models/people.model';
import { Utils } from '../../utils';

export const HomePage = () => {

  const [characterData, setCharacterData] = React.useState<PeopleModel>();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if(Utils.isMobile()) {
      setIsMobile(true); 
    } 
  }, []);

  const handleSelectCard = (dt: PeopleModel) => {
    setCharacterData(dt);
  }

  return (
    <div className='min-h-screen flex flex-col'>

      { isMobile ? <Header name={characterData?.name} isMobile={true} /> : <Header />}

      <main className='p-0 flex flex-row md:flex-grow '>
        
        {
          isMobile && characterData ? 
            <PeopleList onSelectCard={handleSelectCard} styles='translate-x-0 hidden'/>
          :
            <PeopleList onSelectCard={handleSelectCard} />
        }
        {
          !characterData ? '' : isMobile ?
            <PersonDetail 
              name={characterData.name}
              birth_year={characterData.birth_year}
              eye_color={characterData.eye_color}
              hair_color={characterData.hair_color}
              skin_color={characterData.skin_color}
              vehicles={characterData.vehicles}
              styles='translate-x-full'
            />
          : 
            <PersonDetail 
              name={characterData.name}
              birth_year={characterData.birth_year}
              eye_color={characterData.eye_color}
              hair_color={characterData.hair_color}
              skin_color={characterData.skin_color}
              vehicles={characterData.vehicles}
            />
        }

      </main>

    </div>
  )
}
