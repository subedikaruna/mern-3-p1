import { useEffect,useState } from "react";
import Card from "./components/Card.jsx";
import Navbar from "./components/Navbar.jsx";
import axios from "axios";

function Home() {
  const[blogs,setBlogs]=useState([])
  const fetchBlogs = async () => {
    let response = await axios.get("http://localhost:3000/blog");
    setBlogs(response.data.data)
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-wrap">
      {
         blogs.map((blog)=>{
          return(
            <Card blog={blog}/>
          )
         })
      }
     
     
      </div>
    </>
  );
}

export default Home;
