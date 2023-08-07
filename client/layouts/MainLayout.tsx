import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Container } from '@mui/material'
import styles from './MainLayout.module.scss'

export const MainLayout: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={styles.main}>
      <Navbar />
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        {children}
      </Container>
    </div>
  )
}
