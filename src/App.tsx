import React, { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from 'react-redux'
import {store , persistor} from '../redux-store/redux-store'
import { PersistGate } from 'redux-persist/integration/react'
import Repo from './pages/Repo'



const queryClient:QueryClient = new QueryClient()

const Home  = React.lazy(()=>import("./pages/Home"));



const router = createBrowserRouter([
  {
    index : true,
    Component : ()=>{
      return (
      <Suspense fallback = {<CircularProgress/>} >
        <Home />
      </Suspense>

    )},
    path : '/'

  },
  {
    index : true,
    Component : ()=>{
      return (
      <Suspense fallback = {<CircularProgress/>} >
        <Repo />
      </Suspense>

    )},
    path : 'repo/:repo_name'

  },
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={ queryClient} >
      <Provider store={store}>
        <PersistGate loading = {<CircularProgress />} persistor = {persistor}>

          <RouterProvider router={ router} />
        
        </PersistGate>
      
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
