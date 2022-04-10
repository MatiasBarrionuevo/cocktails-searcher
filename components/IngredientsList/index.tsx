import React from 'react'
import { ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { range } from 'lodash'
import type { Drink } from '../../types/types'

type props = {data:Drink}

function IngredientsList ({ data }:props) {
  return <>
    <Text fontSize='lg'>Ingredients</Text>
    <UnorderedList marginLeft={8}>
        {range(1, 15).map((order:number) => data[`strIngredient${order}`] && <ListItem key={order}>
            <Text fontSize='md'>
                {data[`strIngredient${order}`]}
                {data[`strMeasure${order}`] ? ` - ${data[`strMeasure${order}`]}` : null}
            </Text>
        </ListItem>)}
    </UnorderedList>
  </>
}

export default IngredientsList
