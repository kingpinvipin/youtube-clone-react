import React from 'react' ;

import { Grid } from '@material-ui/core' ;

import VItem from './VItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const listOfVideos = videos.map((video, id) => <VItem key = {id} onVideoSelect = {onVideoSelect} video = {video} /> ) 

    return (
        <Grid container spacing = {10}>
            {listOfVideos}
        </Grid>
    )
}

export default VideoList ;