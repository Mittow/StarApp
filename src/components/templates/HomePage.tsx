import { Header } from '../molecules/Header'
import { PeopleList } from '../organisms/PeopleList'

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className='p-4'>
        <PeopleList />
      </div>
    </>
  )
}
