import React from 'react'
import { Field, Form, Formik, FormikValues } from 'formik'
import { FormControl, FormLabel, Input, FormErrorMessage, Button, HStack, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import type { setDrinksType } from '../../types/types'
import { SearchIcon } from '@chakra-ui/icons'

function Searcher ({ setDrinks }:setDrinksType) {
  const validateName = (value:string) => {
    let error
    if (!value) {
      error = 'Name is required'
    }
    return error
  }
  return <Formik
    initialValues={{ name: '' }}
    onSubmit={(values, actions) => {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${values.name}`)
        .then(rsp => rsp.json()).then(({ drinks }) => {
          setDrinks(drinks)
          actions.setSubmitting(false)
        })
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <Field name='name' validate={validateName}>
          {({ field, form }:FormikValues) => (
            <FormControl isInvalid={form.errors.name && form.touched.name}>
              <FormLabel htmlFor='name'>
                <Text fontSize='xl'>Find your favorite cocktail</Text>
              </FormLabel>
              <HStack spacing={4}>
                <InputGroup maxW='xl'>
                  <InputLeftElement pointerEvents='none'>
                    <SearchIcon color='gray.300' />
                  </InputLeftElement>
                  <Input {...field} id='name' type='text' placeholder='Cocktail Name' />
                </InputGroup>
                <Button
                  mt={4}
                  colorScheme='teal'
                  isLoading={isSubmitting}
                  type='submit'
                  >
                  Search
                </Button>
              </HStack>
              <FormErrorMessage>{form.errors.name}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
      </Form>
    )}
  </Formik>
}

export default Searcher
