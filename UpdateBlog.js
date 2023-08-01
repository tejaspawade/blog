import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BlogServices from '../services/BlogServices'
import Blog from '../models/Blog';
import './UpdateBlog.css'

function UpdateBlog() {
  const {id}=useParams()
  const bservice=new BlogServices();
  const [blog,setBlog]=useState(new Blog())
  const navigate=new useNavigate();

  useEffect(()=>{
    bservice.getBlogById(id)
    .then(res=>{
      setBlog(res.data)
    })
    .catch(err=>{
      console.log(err.data)
    })
  },[])
  const handleSubmit=()=>{
     bservice.updateBlog(blog)
     .then(res=>{
      //  alert(JSON.stringify(res.data));
      //  navigate('/ListEmp')
     })
     .catch(err=>console.log(err.data))
     .finally(
      navigate('/')
     )
  }
  const handleChangefile= async (event)=>{
    const file=event.target.files[0];
    const base64 = await convertToBase64(file)
    setBlog({...blog,[event.target.id]:base64});
    console.log(base64)
  }
  return (
    <div className='updatepage'><h1>Update Blog</h1>
      <form>
        <div className='form-groupo'>
          <label htmlFor="title">Title</label>
          <input id="title" value={blog.title} className='form-control'
          onChange={(b)=>setBlog({...blog,title:b.target.value})}></input>
        </div>
        <div className='form-groupo'>
          <label htmlFor="exampleFormControlTextarea1">Description</label>
          <textarea id="body" htmlFor="exampleFormControlTextarea1" value={blog.body} className='form-control'
          onChange={(b)=>setBlog({...blog,body:b.target.value})}></textarea>
        </div>
        <div className="mb-3 margin">
            <label htmlFor="exampleFormControlInput1" className="form-label">Image</label>
            <div className='img-div'><img src={blog.author} alt="Blog img" className='blog-img'></img></div>
            <br/>
            <input type='file' onChange={handleChangefile} label='Image' name='myFile' id='image' accept='.jpeg, .png, .jpg'>
            </input>
          </div>
        <br/><br/>
        <button type="submit" className="button-48" role="submit" onClick={handleSubmit}><span className="text">Update</span></button>
     </form>
    </div>
  )
}
function convertToBase64(file){
  return new Promise((resolve, reject) => {
      const fileReader=new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload=()=>{
      resolve(fileReader.result)
      };
      fileReader.onerror =(err)=>{
        reject(err)
      }
  })
}
export default UpdateBlog