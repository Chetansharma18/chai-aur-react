import React from 'react'
import profile from '../assets/profile.jpg'

// Change 'test' to 'Test' to match the export name
function Test({fullname ,role="working in IT"}){  // Capitalized the function name
  console.log(fullname);
  
  return (
    <div>
      <div className="card">
        <img src={profile} alt="Avatar" style={{width: "100%"}} />
        <div className="container">
          <h4><b>{fullname}</b></h4>
          <p>{role}</p>
        </div>
      </div>
    </div>
  )
}

export default Test