import React from 'react';
import {Box,CardContent,CardMedia,Typography} from  '@mui/material';
import  {demoProfilePicture } from '../utils/constants';
import { Link } from 'react-router-dom';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ChannelCard = ({channelDetail,marginTop}) =>  (
   <Box sx={{
       boxShadow:'none',
       borderRadius:'20px',
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       width:{xs:'356px', md:'320px'},
       height: '326px',
       margin: 'auto',
       marginTop

   }}>
<Link to={`/channel/${channelDetail?.id?.channelId}`}>
    <CardContent sx={{display: 'flex', flexDirection:'column', justifyContent:'center', color:'#fff'}}>
    <CardMedia 
    image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
    alt={channelDetail?.snippet?.title}
    sx={{borderRadius: '50%', height:'180%',
    width:'180px', mb:2, border:'1px soli #e3e3e3'}}/>
    <Typography variant='h6'>
        {channelDetail?.snippet?.title}
        <CheckCircleIcon
            sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
          />
    </Typography>
    {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
    </CardContent>
</Link>
   </Box>
)

export default ChannelCard