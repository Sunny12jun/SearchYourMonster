import React from 'react'
import './Search-Box.styles.css'

export const SearchBox= ({placeholder,handelChange})=>(
  <input className="serch" type="search" placeholder={placeholder} onChange={handelChange} ></input>
)