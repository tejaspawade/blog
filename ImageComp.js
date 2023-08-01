import React from 'react'
import './ImageComp.css';
function ImageComp() {
  return (
<div className="card">
<div className="card text-bg-dark">
  <img src="https://media.zicxa.com/2593673" className="card-img" alt=""/>
  <div className="card-img-overlay">
    <h5 className="card-title">Create a blog</h5>
    {/* <p className="card-text">Get started by your blog today</p> */}
    <p className="card-text"><small></small></p>
  </div>
</div>
<br/><br/><br/><br/>
<div className="card text-bg-dark">
  <img src="https://lifethisway.com/wp-content/uploads/2019/03/do-people-still-read-blogs.jpg" className="card-img" alt=""/>
  <div className="card-img-overlay">
    <h5 className="card-title">Read a blog</h5>
    {/* <p className="card-text">Get started by your blog today</p> */}
    <p className="card-text"><small></small></p>
  </div>
</div>
<br/><br/><br/><br/><br/><br/><br/><br/>
<div className="card text-bg-dark">
  <img src="https://media.web.userguiding.com/uploads/2021/04/22045638/what-is-product-update-1160x387.jpg" className="card-img" alt=""/>
  <div className="card-img-overlay">
    <h5 className="card-title">Update a blog</h5>
    {/* <p className="card-text">Get started by your blog today</p> */}
    <p className="card-text"><small></small></p>
  </div>
</div>
<br/><br/>
<div className="card text-bg-dark">
  <img src="https://assets.telegraphindia.com/telegraph/2020/Sep/1600593720_1shutterstock_406413301.jpg" className="card-img" alt=""/>
  <div className="card-img-overlay">
    <h5 className="card-title">Delete a blog</h5>
    {/* <p className="card-text">Get started by your blog today</p> */}
    <p className="card-text"><small></small></p>
  </div>
</div>
</div>
  )
}

export default ImageComp