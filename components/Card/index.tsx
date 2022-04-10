import React from 'react'
import { Box, Grid, GridItem, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import type { Drink } from '../../types/types'
import NextLink from 'next/link'
import IngredientsList from '../IngredientsList'

type props = {data:Drink}

function Card ({ data }:props) {
  const { idDrink, strDrinkThumb, strDrink } = data
  const isMobile = window.innerWidth <= 768
  const image = <Image borderRadius={isMobile ? '8px 8px 0 0' : '8px 0 0 8px'} src={strDrinkThumb || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdAqEOfDyvverajrqcAHUmcFwY4AWcbdl_LR8oa8gHCr2Z-5mTouH93v777QvhjCnBlZU&usqp=CAU'} alt="no imgage" />
  const name = <Text fontSize='xl'>{strDrink}</Text>
  const ingredientsList = <IngredientsList data={data}/>
  return <LinkBox maxW={isMobile ? 'sm' : '2xl'} borderRadius='lg' borderWidth={1}>
      <NextLink href={`/cocktails/${idDrink}`} passHref>
        <LinkOverlay>
            {isMobile
              ? <>
                {image}
                <Box p={4}>
                    {name}
                    {ingredientsList}
                </Box>
              </>
              : <Grid key={idDrink} gap='4' templateRows='repeat(5, 1fr)' templateColumns='repeat(2, 1fr)'>
                <GridItem rowSpan={5} colSpan={1}>
                    {image}
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                    {name}
                </GridItem>
                <GridItem colSpan={1} rowSpan={4}>
                    {ingredientsList}
                </GridItem>
            </Grid>}
        </LinkOverlay>
      </NextLink>
    </LinkBox>
}

export default Card
