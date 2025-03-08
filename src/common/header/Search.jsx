import React from "react"
import { Link } from "react-router-dom"
import"./Search.css"


const Search = ({ CartItem }) => {
  
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
     <h1 >ShopFusion</h1>  
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
           </div>
           
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span> { CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
            
        </div>
      </section>
    </>
  )
}

export default Search;


