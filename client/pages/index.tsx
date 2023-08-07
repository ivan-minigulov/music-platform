import React from 'react'
import styles from '../styles/index.module.css'
import { Button } from '@mui/material'
import Navbar from '../components/Navbar/Navbar'
import { MainLayout } from '../layouts/MainLayout'

export default function index() {
  return (
    <MainLayout>
      <div>Главная страница</div>
    </MainLayout>
  )
}
