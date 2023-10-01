import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

const navigation = [

]
function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
