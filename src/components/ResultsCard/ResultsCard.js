import React from "react";

import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'

const theme = {
  fontSizes: [
    12, 14, 16, 24, 32, 48, 64
  ],
  colors: {
    primary: '#07c',
    gray: '#f6f6ff',
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 2px'
    },
  },
}

export default props =>
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>

// PSUEDO CODE

//1. define plain table with html
//2. Get the Data we want to display 
//3. Define colums for the table
//4. include desired css 

import {
  Box,
  Card,
  Image,
  Heading,
  Text
} from 'rebass'
export default ({
  image,
  title,
  description
}) =>
  <Box width={256}>
    <Card
      sx={{
        p: 1,
        borderRadius: 2,
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
      }}>
      <Image src={image} />
      <Box px={2}>
        <Heading as='h3'>
          {title}
        </Heading>
        <Text fontSize={0}>
          {description}
        </Text>
      </Box>
    </Card>
  </Box>

export default function ResultsCard(props) {
  return (
    <div>
      <p>
        From: {props.formData.from} to: {props.formData.to}
      </p>
      <p>Your Journey is {props.resultsData.distance} km</p>
      <h3>Car</h3>
      <p>
        {props.resultsData.carCarbon} kg of CO<sub>2</sub>
      </p>
      <p>This is the same as boiling {props.resultsData.carKettles} kettles</p>
      <p>
        To offset this carbon you would need to plant{" "}
        {props.resultsData.carTrees} trees
      </p>
      <h3>Train</h3>
      <p>
        {props.resultsData.trainCarbon} kg of CO<sub>2</sub>
      </p>
      <p>
        This is the same as boiling {props.resultsData.trainKettles} kettles
      </p>
      <p>
        To offset this carbon you would need to plant{" "}
        {props.resultsData.trainTrees} trees
      </p>
      <h3>Bus</h3>
      <p>
        {props.resultsData.busCarbon} kg of CO<sub>2</sub>
      </p>
      <p>This is the same as boiling {props.resultsData.busKettles} kettles</p>
      <p>
        To offset this carbon you would need to plant{" "}
        {props.resultsData.busTrees} trees
      </p>
      <h3>Taxi</h3>
      <p>
        {props.resultsData.taxiCarbon} kg of CO<sub>2</sub>
      </p>
      <p>This is the same as boiling {props.resultsData.taxiKettles} kettles</p>
      <p>
        To offset this carbon you would need to plant{" "}
        {props.resultsData.taxiTrees} trees
      </p>
      <h3>Air</h3>
      <p>
        {props.resultsData.flightCarbon} kg of CO<sub>2</sub>
      </p>
      <p>
        This is the same as boiling {props.resultsData.flightKettles} kettles
      </p>
      <p>
        To offset this carbon you would need to plant{" "}
        {props.resultsData.flightTrees} trees
      </p>
    </div>
  );
}
