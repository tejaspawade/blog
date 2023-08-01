import React from 'react'
import './CreateBlog.css'
import BlogService from '../services/BlogServices'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateBlog() {
    const [formData,setFormData]=useState({title:"",body:"",author:""})
    const bservice=new BlogService();
    const navigate=useNavigate();
    const handleSubmit=(b)=>{
        b.preventDefault();
        // alert(`${formData.eName}-${formData.ePswd}-${formData.eRole}`);
        bservice.addBlog(formData);
        navigate('/')
      }
      const handleChange=(event)=>{
        setFormData({...formData,[event.target.id]:event.target.value});
      }
      const handleChangefile= async (event)=>{
        const file=event.target.files[0];
        const base64= await convertToBase64(file);
        setFormData({...formData,[event.target.id]:base64});
        console.log(base64)
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
  return (
<div className="createpage">
<h1>Create Your Blog</h1><br/><br/>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
  <input type="title" className="form-control" id="title" placeholder="Enter your blog's Title" 
  onChange={handleChange}/>
</div>
<br/><br/>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Body</label>
  <textarea className="form-control" id="body" rows="3" placeholder="Enter your blog's descriptiom" 
  onChange={handleChange}></textarea>
</div>
<br/><br/>
<p className='img-text'>Image</p>
  <div className="mb-3 margin">
    <label htmlFor='file-upload' className='custom-file-upload'></label>
    <input type='file' onChange={handleChangefile} label='Image' name='myFile' id='image' accept='.jpeg, .png, .jpg'>
    </input>
  </div>
<button type="submit" className="button-48" role="button" onClick={handleSubmit}><span className="text">Post</span></button>

    </div>
  )
}

export default CreateBlog