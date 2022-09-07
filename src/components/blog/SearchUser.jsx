import React, { useState, useEffect, useRef} from 'react'



export const SearchUser = (props) => {

  const inputEl = useRef("")

  return (
    <div className="search_container">
        <input 
        ref={inputEl}
        values={ props.term } 
        className="search" type="text"
         placeholder="write the tag" 
         onChange={ (e)=> props.props.setSearchTerm(e.target.value)  }
         />
    </div>
  )
}
