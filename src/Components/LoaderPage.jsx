import { CircularProgress } from '@mui/material'
import React from 'react'

export default function LoaderPage() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
        <CircularProgress className='mr-4'/> Loading.....
    </div>
  )
}
