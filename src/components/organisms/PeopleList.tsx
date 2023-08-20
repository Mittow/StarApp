import React from 'react';
import PullToRefresh from 'react-pull-to-refresh';

import { PersonCard } from '../molecules/PersonCard';
import { Loading } from '../molecules/Loading';
import { PeopleModel } from '../../models/people.model';
import { people } from '../../api/people';
import { Failed } from '../atoms/Failed';

export const PeopleList = () => {
  let contenido;

  const [allPeople, setAllPeople] = React.useState<PeopleModel[] | null>(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    
    getPeople();

  }, []);

  function getPeople () {
    setIsLoading(true);
    people.getAll()
      .then((r) => {
        const result = r.data.results;
        console.log(result);
        setAllPeople(result); 
      })
      .catch((e) => {
        console.log(e);
        setError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });

  }

  // Función para manejar la acción de "pull-to-refresh"
  const handleRefresh = async () => {
    getPeople();
  };

  if (error) {
    contenido = (
      <PullToRefresh onRefresh={handleRefresh}>
        <Failed />
      </PullToRefresh>
    )
  } else if (isLoading) {
    contenido = <Loading />
  } else {
    contenido = (
      allPeople?.map((character, index) => {
        return (
          <PersonCard 
            key={index}
            name={character.name}
            hair_color={character.hair_color}
            skin_color={character.skin_color}
            eye_color={character.eye_color}
            birth_year={character.birth_year}
            homeworld={character.homeworld}
          />
        )
      })
    );
  }
  
  return (
    <aside className='w-full md:w-1/4 md:border-r border-[rgba(0,0,0,0.3)]'>
      { contenido }
    </aside>
  )
}