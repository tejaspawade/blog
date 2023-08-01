import React, { useEffect, useState } from 'react'
import './Home.css'
import BlogService from '../services/BlogServices'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

function singleBlog(props){
  return (
    <div className='card margin-singleBlog'>
      <div className='container btn-block'>
      {/* <img src={props.image} alt="Blog img" className='blog-img'></img> */}
        <h3 className='title col-10'>{props.title}</h3>
        <div className='col-2'>
        <br/>
          <i className = "material-icons" ><Link to={`/ReadBlog/${props.id}`}>touch_app</Link></i>
          <br/><br/>
          <i className = "material-icons" ><Link to={`/UpdateBlog/${props.id}`}>edit</Link></i>
          <br/><br/>
          <i className = "material-icons" ><Link to={`/DeleteBlog/${props.id}`}>delete</Link></i>
          <br/><br/>
        </div>
      </div>
        {/* <ReactMarkdown className='description'>{props.body}</ReactMarkdown> */}
    </div>
  )
}

function Home() {
  let service= new BlogService()
  const [lsBlogs,setlsBlogs]=useState([]);

  useEffect(()=>{
    service.lstBlogs().then(
      res=>{
        console.log(res.data)
        setlsBlogs(res.data);
      }
    )
  },[])
  return (
    <>
    <h1>Blogs</h1><br/>
      <div className='container'>
         {lsBlogs.map(blog => (
          <div>
            {singleBlog(blog)}
            </div>
         ))}
      </div>  
    </>
  )
}

export default Home