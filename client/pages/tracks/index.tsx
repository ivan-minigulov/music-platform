import React from 'react'
import { MainLayout } from '../../layouts/MainLayout'
import { Box, Button, Card, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import { ITrack } from '../../types/track'
import { TrackList } from '../../components/TrackList/TrackList'

export default function Index() {
  const router = useRouter()
  const tracks: ITrack[] = [
    {
      _id: 'string',
      name: 'Gthdsd',
      artist: 'string',
      text: 'string',
      listens: 10,
      picture: '',
      audio: 'string',
      comments: [],
    },
    {
      _id: 'string',
      name: 'asdsad',
      artist: 'string',
      text: 'string',
      listens: 10,
      picture: '',
      audio: 'string',
      comments: [],
    },
  ]
  return (
    <MainLayout>
      <Grid container justifyContent={'center'}>
        <Card style={{ width: '900px' }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Треки</h1>
              <Button onClick={() => router.push('/tracks/create')}>
                Загрузить
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  )
}
