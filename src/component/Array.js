import React from 'react'

function Array({fruits}) {
  return (
    <div>
      <ul>
        {    //java script canbe written in HTml with curly brackets 

        fruits.map((fruits,index)=> (
        <li key= {index}>{fruits}</li>
         ))
         }
        </ul>
    </div>
  )
}

export default Array
