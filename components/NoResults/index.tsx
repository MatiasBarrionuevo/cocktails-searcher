import React from 'react'
import { Button, Text } from '@chakra-ui/react'

function NoResults ({ randomSearch }:{randomSearch:() => void}) {
  return <>
    <Text marginTop={8} fontSize='2xl'>its appear to be none cocktail here, we can recommend you a random one?</Text>
    <Button colorScheme='teal' onClick={randomSearch}>Give me one to try!</Button>
  </>
}

export default NoResults
