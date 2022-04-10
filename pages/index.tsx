import React, { useState } from 'react'
import type { NextPage } from 'next'
import type { Drinks } from '../types/types'
import { Container, Heading } from '@chakra-ui/react'
import Searcher from '../containers/Searcher'
import Results from '../components/Results'
import NoResults from '../components/NoResults'

const Home: NextPage = () => {
  const [drinks, setDrinks] = useState<Drinks>([])
  const randomSearch = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(rsp => rsp.json())
      .then(({ drinks }) => {
        setDrinks(drinks)
      })
  }
  return <Container maxW='8xl' p={4}>
    <Heading as='h1' fontSize='6xl' marginBottom={8}>Cocktails</Heading>
    <Searcher setDrinks={setDrinks}/>
    {drinks && drinks.length
      ? <Results drinks={drinks}/>
      : <NoResults randomSearch={randomSearch} />}
  </Container>
}

export default Home
