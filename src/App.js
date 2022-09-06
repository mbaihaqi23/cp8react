import { Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Blogs from './pages/Blogs'
import CreatePosts from './pages/CreatePosts'
import Dashboard from './pages/Dashboard'
import DetailPost from './pages/DetailPost'
import AppLayouts from './components/Layout'
import EditPost from './pages/EditPost'
//import Navbar from './components/Navbar'


function App() {
  return (

    <AppLayouts>
    <Routes>
      <Route path="/" element={<Blogs />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:postId" element={<DetailPost />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/posts/create" element={<CreatePosts />} />
      <Route path="/posts/:postId/edit" element={<EditPost />} />
    </Routes>
  </AppLayouts>
      
)}

export default App