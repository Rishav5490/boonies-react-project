import "./App.css";
import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Layout from "./components/Layout";
import Test from "./pages/Test";
function App() {
  return (
    <>
     <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/destination" element={<Destination/>} />
          <Route path="/blogs" element={<Blogs/>} />  
          <Route path="/test" element={<Test/>} />  
        </Routes>
      </Router>
       </Layout> 
    </>
  );
}

export default App;
