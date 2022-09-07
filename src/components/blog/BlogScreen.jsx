import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { loadUsers } from '../../actions/ui'
import { Modal } from '../../Modal';

import { Sidebar } from './Sidebar';




export const BlogScreen = () => {

  let dispath = useDispatch()
  
  let {users} = useSelector(state => state.ui)
  console.log(users);
  let id = ''
const getId = () => {
  users.map(user => {
    return id = user._id
  })
}

getId()

  const [actualStep, setActualStep] = useState(id)
  const [trueModal, setTrueModal] = useState(false)
  const [modal, setModal] = useState(false)

  const [searchTerm, setSearchTerm] = useState('')
 

  useEffect(()=> {
    dispath(loadUsers())
  },[])


  const getStep = (e) => {
    console.log(e);
    setActualStep(e)
    setModal(true)
    console.log(actualStep)
    const u =  users.filter(user => user._id === e)
    console.log(u);
    setTrueModal(u)

  }

  let date = new Date();
  let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();

// console.log(output);
  return (
    <div className="journal__main-content animate__animated animate__fadeIn animate_faster">
       <Sidebar setSearchTerm={setSearchTerm} />
       <main>
     
       <div className="container_getusers" >
       {
          users.filter(val=>{
           
            if (searchTerm === '') {
             
                return val
            }else if(val.tags[0].toLowerCase().includes(searchTerm.toLowerCase()) ){
               return val
            }
          
          }).map(user=> (
            <article key={user._id} className="user_container"
             onClick={()=> getStep(user._id) } 
            
             >
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
                         <h3> {output} </h3>
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
          ))
        }
       </div>   
   </main>
    
       {
         modal === true ? <Modal trueModal={trueModal} modal={modal} setModal={setModal}  /> : null
       }
       
    </div>
  )
}