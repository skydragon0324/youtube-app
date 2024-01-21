import React,{useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import { Box, Stack,Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import CheckCircle from '@mui/icons-material/CheckCircle';
import {Videos, Loader} from './';
import { fetchFromApi } from '../utils/fetchFromApi';

const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  
  const [videos, setVideos] = useState([]);
 
  const {id} = useParams();

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data?.items[0]));

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}`)
    .then((data) => setVideos(data.items));

  }, [id]);

  if(!videoDetail?.snippet) return <Loader/>

  const { snippet:{title, channelId,channelTitle},statistics:{viewCount, likeCount} } = videoDetail;
  
  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs:'column', md:'row'}}>
<Box flex={1}>
<Box sx={{width: '100%', position:'sticky', top:'86px'}}>
  <ReactPlayer url={`https:///www.youtube.com/watch?v=${id}`} 
  className='react-player'
  controls/>
  <Typography color='#fff'
  variant='h5'
  p={2}
  fontWeight='bold'>
    {title}
  </Typography>
  <Stack drection='row' justifyContent='space-between' sx={{
    color:'#fff'
  }}
  py={1}
  px={2}>
    <Link to={`/channel/${channelId}`}>
  <Typography sx={{ sm: 'subtitle1', md:'h6' }} color='#fff'>
    {channelTitle}
    <CheckCircle sx={{fontSize: '12px', color:'gray', ml:'5px'}}/>
  </Typography>
    </Link>
    <Stack direction='row' gap='20px' alignItems='center'>
      <Typography variant='body1' sx={{opacity: 0.7}}>
 {parseInt(viewCount).toLocaleString()} views
      </Typography>
      <Typography variant='body1' sx={{opacity: 0.7}}>
 {parseInt(likeCount).toLocaleString()} views
      </Typography>
    </Stack>
  </Stack>
</Box>
</Box>
<Box px={2} py={{md: 1, xs:5}} justifyContent='center' alignItems='center'>
  <Videos videos={videos} direction='column'/>
  </Box>
</Stack>
 </Box>
  )
}

export default VideoDetails