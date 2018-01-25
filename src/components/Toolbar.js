import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../assets/styles/toolbar.css';

const Toolbar = ({ handleNew, handleDel, toggleFavorite, activeNote }) => {
  return (
    <div className="toolbar">
      <i className="glyphicon logo">
        <img src={logo} alt="logo" width="30" height="30" />
      </i>
      <i onClick={handleNew} className="glyphicon glyphicon-plus"></i>
      <i onClick={toggleFavorite} className={'glyphicon glyphicon-star ' + (activeNote.favorite ? 'starred': '')}></i>
      <i onClick={handleDel} className="glyphicon glyphicon-remove"></i>
    </div>
  )
}

export default Toolbar