import React from 'react'
import { ITrack } from '../../types/track'
import { Box, Grid } from '@mui/material'
import { TrackItem } from '../TrackItem/TrackItem'

interface ITrackListProps {
  tracks: ITrack[]
}

export const TrackList: React.FC<ITrackListProps> = ({ tracks }) => {
  return (
    <>
      <Grid container direction={'column'}>
        <Box p={2}>
          {tracks.map((track, index) => (
            <TrackItem track={track} key={index} />
          ))}
        </Box>
      </Grid>
    </>
  )
}
