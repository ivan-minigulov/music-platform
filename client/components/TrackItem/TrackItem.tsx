import React from 'react'
import { ITrack } from '../../types/track'
import styles from './TrackItem.module.scss'
import { Card, Grid, IconButton } from '@mui/material'
import { PlayArrow, Pause, Delete } from '@mui/icons-material'
import Image from 'next/image'

interface ITrackItem {
  track: ITrack
  active?: boolean
}

export const TrackItem: React.FC<ITrackItem> = ({ track, active = false }) => {
  return (
    <Card className={styles.track}>
      <IconButton>{active ? <Pause /> : <PlayArrow />}</IconButton>
      <Image src={track.picture} alt={track.name} width={70} height={70} />
      <Grid
        container
        direction={'column'}
        style={{ width: 200, margin: '0 20px' }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: '12px', color: 'gray' }}>{track.artist}</div>
      </Grid>
      {active && <div>02:42 / 03:00</div>}
      <IconButton style={{ marginLeft: 'auto' }}>
        <Delete />
      </IconButton>
    </Card>
  )
}
