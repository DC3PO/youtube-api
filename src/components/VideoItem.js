import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <Grid item xs={12}>
            <Paper style={{ display: 'flex', alignment: 'center', cursor: 'pointer' }} onClick={() => onVideoSelect(video)}>
                <img style={{ marginRight: '10px', width: '50%' }} alt='thumbnail' src={video.snippet.thumbnails.medium.url} />
                <Typography style={{fontWeight: 'bold', alignment: 'center' }} variant='subtitle1'>{video.snippet.title}</Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem;