import { Header } from '../molecules/Header'
import { PeopleList } from '../organisms/PeopleList'

export const HomePage = () => {

  return (
    <div className='min-h-screen flex flex-col'>

      <Header />

      <main className='p-0 flex flex-row md:flex-grow '>
        
        <PeopleList />

        <section className='hidden md:inline-block md:w-3/4'>
          <h3>FEATURE DETAILS</h3>
        </section>

      </main>

    </div>
  )
}
