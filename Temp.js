import React, { useEffect, useState } from 'react'
import './Temp.css'
import BlogService from '../services/BlogServices'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

function singleBlog(props){
  return (
    <div className="card">
        <img src={props.image} className="card-img-top" alt="image"/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <a className="btn btn-primary">Read More</a>
        </div>
    </div>

  )
}

function Temp() {
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
        <div className="row gy-3 my-3">
            <div className="col-my-3">
         {lsBlogs.map(blog => (
          <div>
            {singleBlog(blog)}
            </div>
         ))}
         </div>
         </div>
      </div>  
    </>
  )
}

export default Temp