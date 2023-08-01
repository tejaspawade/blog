import React from 'react'
import { useParams } from 'react-router-dom'
import BlogService from '../services/BlogServices'
import { useEffect,useState } from 'react'
import Blog from '../models/Blog'
import './ReadPage.css'

function ReadBlog() {
  const {id}=useParams()
  const bservice=new BlogService();
  const [blog,setBlog]=useState(new Blog())

  useEffect(()=>{
    bservice.getBlogById(id)
    .then(res=>{
      setBlog(res.data)
    })
    .catch(err=>{
      console.log(err.data)
    })
  },[])
  return (
    <div className='readpage'><h1>{blog.title}</h1>
      <form>
        <br/><br/>
        <div className='form-groupo'>
          <label htmlFor="body">{blog.body}</label>
        </div>
        <br/><br/>
        <div className='form-groupo'>
           <img src={blog.image} alt="Blog img" className='blog-img'/>
        </div>
     </form>
    </div>
  )
}

export default ReadBlog