import { Route, Routes } from 'react-router'
import Homepage from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  )
}

export default App
