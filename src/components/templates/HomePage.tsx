//import { Failed } from '../atoms/Failed'
import { Header } from '../molecules/Header'
import { Loading } from '../molecules/Loading'
//import { PeopleList } from '../organisms/PeopleList'

export const HomePage = () => {
  return (
    <div className='min-h-screen flex flex-col'>

      <Header />

      <main className='p-4 flex flex-row md:p-0 md:flex-grow '>
        
        <aside className='w-full md:w-1/4 md:border-r border-[rgba(0,0,0,0.3)]'>
          <Loading />
          {/* <Failed /> */}
        </aside>

        <section className='hidden md:inline-block md:w-3/4'>
        </section>

      </main>

    </div>
  )
}
