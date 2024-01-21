import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { ChannelDetails,Navbar,Feed,VideoDetails, SearchFeed  } from './components';



const App = () => (
        <Box sx={{backgroundColor: '#000'}}>
           <Navbar/>
            <Routes>
                <Route path='/' exact element={<Feed/>}/>
                <Route path='/video/:id' element={<VideoDetails/>}/>
                <Route path='/channel/:id' element={<ChannelDetails/>}/>
                <Route path='/search/:searchTearm' element={<SearchFeed/>}/>
            </Routes>
        </Box>
    )
export default App