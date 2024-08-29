import React from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import Excercises from '../components/Excersises'
import SearchExcercises from '../components/SearchExcercises'

function Home() {
  return (
    <Box>
      <HeroBanner />
      <SearchExcercises />
      <Excercises />
    </Box>
  )
}

export default Home
