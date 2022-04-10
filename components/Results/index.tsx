import React from 'react'
import { Text, SimpleGrid } from '@chakra-ui/react'
import type { Drinks } from '../../types/types'
import Card from '../Card'

type props = {drinks:Drinks}

function Results ({ drinks }:props) {
  return <>
    <Text fontSize='4xl'>Results</Text>
    <SimpleGrid columns={window.innerWidth <= 768 ? 1 : 2} spacing={4}>
        {drinks && drinks.length && drinks.map(drink => <Card key={drink.idDrink} data={drink}/>)}
    </SimpleGrid>
  </>
}

export default Results
