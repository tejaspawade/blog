import { Component } from 'react'
import axios from 'axios'

export class BlogService extends Component {
  baseurl=`http://localhost:7252/api/Blog`

  lstBlogs(){
    return axios.get(this.baseurl)
  }

  addBlog(blog)
  {
    return axios.post(this.baseurl,blog)
  }
  getBlogById(id)
  {
    return axios.get(this.baseurl+'/'+id)
  }
  updateBlog(blog){
    return axios.put(this.baseurl +'/' + blog.id ,blog)
  }
  delBlog(id)
  {
    return axios.delete(this.baseurl +'/' + id)
  }
}

export default BlogService