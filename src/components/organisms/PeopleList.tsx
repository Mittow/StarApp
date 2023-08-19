import React from 'react'
import { PersonCard } from '../molecules/PersonCard'
import { Loading } from '../molecules/Loading'

export const PeopleList = () => {
  return (
    <div>
      <PersonCard />
      <PersonCard />
      <PersonCard />
      <PersonCard />
      <PersonCard />
      <Loading />
    </div>
  )
}
