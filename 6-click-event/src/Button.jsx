// import React, { useState, useEffect } from "react";

function Button() {
  const imgUrl = 'https://placehold.co/200x200/orange/white';
  const handleCLick = (e) => {
    e.target.display = 'none'
  }


  return (
    <img onClick={ (e) => handleCLick(e) } src={imgUrl  }></img>
  )
    
}

export default Button;
