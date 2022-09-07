import React, { useState } from 'react'


export const Modal = ({trueModal, modal, setModal}) => {


  let date = new Date();
  let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();

  
  return (
     <div onClick={ ()=>setModal(false)} className={ modal === false ? "close" : "capa"  }>
        
              <div className="modal" >
      {
         trueModal.map(user=> (
          <div> 
            <article className="user_container_user">
              <div className="img_user">
                  <img src={user.profile} alt="" />
                  <div className="user_title">
                      <h4> {user.name} </h4>
                      <p> {output} </p>
                  </div>
              </div>
              <div className="container_comment">
                <div className="img_post">
                  <img src={user.picture_commet} alt="" />
                </div>
                  <div className="comments">
                      <div className="comment_title">
                         <h3> { output } </h3>
                          <p> { user.comments } </p>
                      </div>
                      <div className="container_tags">
                     {
                        user.tags.map((tag,index)=> (
                          <div  key={index } >
                              <button className="tags"> {tag} </button>
                          </div>
                        ))

                      }
                     </div>
                  </div>
                  <div className="likes">
                  <i className="fa-brands fa-gratipay"></i>
                    <h4 className="number_likes" >  { user.likes }</h4>
                  </div>
              </div>
            </article>    
         </div>
         ))
     }
     
   </div>
 </div>
  )
}
