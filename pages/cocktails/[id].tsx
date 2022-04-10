import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import type { Drink } from '../../types/types'
import { Center, Container, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import IngredientsList from '../../components/IngredientsList'

const Cocktail: NextPage = () => {
  const [data, setData] = useState<Drink|null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()
  const { id } = router.query
  useEffect(() => {
    if (!id) {
      return
    }
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then(({ drinks }) => {
        setData(drinks[0])
        setLoading(false)
      })
  }, [id])
  if (loading) {
    return <Center h='100vh'>
      <Text fontSize='6xl'>Loading...</Text>
    </Center>
  }
  if (!data) {
    return <Center h='100vh'>
      <Text fontSize='6xl'>An error has occurred, please reload the page</Text>
    </Center>
  }
  const { strDrink, strDrinkThumb, strInstructions } = data
  const isMobile = window.innerWidth <= 768
  return <Container maxW='2xl' paddingTop={16}>
    <Grid
      h='600px'
      templateRows='repeat(10, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={4}
    >
      <GridItem rowSpan={1} colSpan={5}>
        <Text fontSize='6xl'>{strDrink}</Text>
      </GridItem>
      <GridItem rowSpan={isMobile ? 1 : 7} colSpan={isMobile ? 5 : 3}>
        <Image src={strDrinkThumb} w='380' h='380' />
      </GridItem>
      <GridItem rowSpan={isMobile ? 1 : 7} colSpan={isMobile ? 5 : 2}>
        <IngredientsList data={data} />
      </GridItem>
      <GridItem rowSpan={isMobile ? 1 : 3} colSpan={5}>
        <Text fontSize='md'>{strInstructions}</Text>
      </GridItem>
    </Grid>
  </Container>
}

export default Cocktail
