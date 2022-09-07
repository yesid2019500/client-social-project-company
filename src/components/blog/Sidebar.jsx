import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { SearchUser } from './SearchUser';



export const Sidebar = (props) => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout())
  } 


const {name, photo} = useSelector( state => state.auth );

  return (
    <header className='header_blog'>
       
        <h2>Social Media</h2>
            <div className="title_header">
            <SearchUser props={props} />
                
            </div>
        <div className="journal__sidebar-navbar">
            <h3 className="mt-5">
            <div className="photo">
             {
                (!photo)
                ? (<img className="true" src={'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg'} alt="" />)

                : (<img className="true" src={photo} alt='' />)
             }
             
            </div>
              
               <span className="name" >{name}</span>
            </h3>
            <button className="btn"
            onClick={ handleLogout }>
              Logout
            </button>
        </div>
    </header>
  )
}