import { Toaster } from 'react-hot-toast'
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Home></Home>
       <Toaster
        position="top-left"
        toastOptions={{
          style: {
            background: '#fff',
            color: 'black',
            fontWeight: 'bold',
            borderRadius: '8px',
          },
        }}
      />
    </>
  )
}

export default App
