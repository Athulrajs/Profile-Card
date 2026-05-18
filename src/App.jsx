import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProfileCard from './components/ProfileCard'
import Profile from './pages/Profile'
import Edit from './pages/Edit'
import userImage from './assets/Image1.jpg'

const users = [
  {
    name: 'Jane Doe',
    designation: 'Product Designer',
    email: 'jane.doe@example.com',
    company: 'Acme Corp',
    country: 'USA',
    image: userImage,
  },
  {
    name: 'John Smith',
    designation: 'Frontend Engineer',
    email: 'john.smith@example.com',
    company: 'Pixel Labs',
    country: 'Canada',
    image: userImage,
  },
  {
    name: 'Aisha Khan',
    designation: 'UX Researcher',
    email: 'aisha.khan@example.com',
    company: 'Nova Studio',
    country: 'UK',
    image: userImage,
  },
]

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProfileCard users={users} />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
