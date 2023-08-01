import React from 'react'
import { useParams } from 'react-router-dom'
import BlogService from '../services/BlogServices'
import { useEffect } from 'react'
import './DeleteBlog.css'
import { useNavigate } from 'react-router-dom'

function DeleteBlog() {
  const {id}=useParams()
  const bservice=new BlogService();
  const navigate=new useNavigate();
  // useEffect(()=>{
    // bservice.delBlog(id)
    // .then(res=>{
    //   alert("Blog Deleted Successfully")
    // })
    // .catch(err=>{
    //   console.log(err.data)
    // })
  // },[])
  const handleDelete=()=>{
    bservice.delBlog(id)
    .then(res=>{
      // alert("Blog Deleted Successfully")
    })
    .catch(err=>{
      console.log(err.data)
    })
    .finally(
     navigate('/')
    )
  }
  const handleNo=()=>{
    navigate('/')
  }
  return(
  <div className="container-bg-light" id="myForm">
  <form  type="submit" className="form-container"><br/>
    <h2>Are you sure to delete this blog?</h2><br/><br/>
    <button onClick={handleDelete} type="submit" className="button-481" role="button" ><span className="text">Yes</span></button><span/>
    <button onClick={handleNo} type="submit" className="button-48" role="button" ><span className="text">No</span></button>
  </form>
</div>
  )
}

export default DeleteBlog