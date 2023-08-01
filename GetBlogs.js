// import React from 'react'

// export default function GetBlogs() {
//   fetch('http://localhost:7252/api/Blog')
//   .then(res=>{
//     if(res.ok){
//         console.log("SUCCESS")
//         return res.json()
//     }  
// })
//   .then(data=>console.log(data))
// }
import React, { Component } from 'react'
import Blog from '../models/Blog';
import BlogServices from '../services/BlogServices';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

export class GetBlogs extends Component {
  bservice=new BlogServices();
  constructor(){
    super();
    this.state={
        blog:new Blog(),
        lstBlog:[]
    }
  }
  componentDidMount()
    {
        this.bservice.lstBlogs()
        .then((res)=>{
           // alert(JSON.stringify(res.data));
            this.setState({lstBlog:res.data})
        })
        .catch((err)=>{
            console.log(err.data)
        })
    }
    
  render() {
    return (
      <>
      <div>
        <h2>List Blogs</h2><br/><hr/>
        <table className='table table-striped'>
            <thead>
                <tr><th>Id</th>
                <th>Blog Title</th>
                <th>Blog Descriptiom</th>
                <th>Blog Author</th>
                <th>Update</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.lstBlog.map((b)=>(
                        <tr>
                            <td><Link to={`/ReadBlog/${b.id}`}>{b.id}</Link></td>
                            <td>{b.title}</td>
                            <td>{b.body}</td>
                            <td>{b.image}</td>
                            <td><i className = "material-icons" ><Link to={`/UpdateBlog/${b.id}`}>edit</Link></i></td>
                            <td><i className = "material-icons" ><Link to={`/DeleteBlog/${b.id}`}>delete</Link></i></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
      </>
    )
  }
}

export default GetBlogs