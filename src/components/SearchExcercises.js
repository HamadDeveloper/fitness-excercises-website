import React, { useSyncExternalStore } from 'react'
import { useEffect,useState } from 'react'
import {Box,Button,Stack,Typography,TextField} from '@mui/material'
import { fetchData,exerciseOption } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExcercises = () => {
    const [search, setSearch] = useState('')
    const [exercises, setExercises] = useState([])
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
      const fetchExerciseData = async () =>{
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOption)

        setBodyParts(['all', ...bodyPartsData])
      }
      fetchExerciseData();
      
    }, [])
    

    const handleSearch = async() =>{
        if(search){
            const  exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOption)
            
            const SearchExcercises = exerciseData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
                || exercise.equiptment.toLowerCase().includes(search)
            );

            setSearch('');
            setExercises(searchedExcercises)
        }

        
    }
    
  return (
    <Stack alignItems='center' mt='37px'
        justifyContent={'center'}
        p='20px'>
        SearchExcercises
        <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'30px'}}}
        marginBottom='50px' textAlign='center'>
        Awesome Excercises You <br />
        Should Know
        </Typography>

        <Box position='relative'mb='72px'>
            <TextField 
            sx={{
                input:{
                    fontWeight:'700',
                    border:'none',
                    borderRadius:'4px'
                },
                width:{lg:'800px', xs:'350px'},
                backgroundColor:'#fff',
                borderRadius:'40px',
            }}
            height='76px'
            value="search"
            onChange={(e) => setSearch(e.target.value.toLowerCase)}
            placeholder='Search Excercises'
            type='text'            />
            <Button className='search-btn'
            sx={{
                backgroundColor:'#FF2625',
                color:'#fff',
                textTransform:'none',
                width:{lg:'175px', xs:'80px'},
                fontSize:{lg:'20px' , xs:'14px'},
                height:'56px',
                position:'absolute',
                right:'0px',

            }}
            onClick={handleSearch}
            >
                Search
            </Button>
        </Box>
        <Box sx={{position: 'relative', width:'100%', p:'20px'}}>
            <HorizontalScrollbar  data = {bodyParts}/>

        </Box>
    </Stack>
    
  )
}

export default SearchExcercises
