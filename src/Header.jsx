import React, { Component } from 'react'
import  './header.css'
import GithubSvg from './svg/Github'
import LinkedIn from './svg/LinkedIn'

function Header() {
  
    return (
      <header>
        <div className="my-name-container">
        <p className="my-name">Stephanie</p>
        <p className="my-name lastname">Karlsson</p>
        </div>
        <div className="header-icons">
          <GithubSvg />
          <LinkedIn />
        </div>
      </header>
    )

}

export default Header
