import React from "react"
import "./Head.css"
const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +8056781071</label>
            <i className='fa fa-envelope'></i>
            <label> shopping.com</label>
          </div>
          <div className='right row RText'>
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
           
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
