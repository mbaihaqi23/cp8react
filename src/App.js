import { Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Blogs from './pages/Blogs'
import CreatePosts from './pages/CreatePosts'
import Dashboard from './pages/Dashboard'
import DetailPost from './pages/DetailPost'
import Home from './pages/Home'
import AppLayouts from './components/Layout'
//import Navbar from './components/Navbar'


function App() {
  return (

    <AppLayouts>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:postId" element={<DetailPost />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/posts/create" element={<CreatePosts />} />
    </Routes>
  </AppLayouts>
      
)}

export default App