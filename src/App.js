import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from './pages/posts';
import Post from './pages/post';


function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/">
          <Route index element={<Posts />}/>
          <Route path=":id" element={<Post />}/>
        </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
