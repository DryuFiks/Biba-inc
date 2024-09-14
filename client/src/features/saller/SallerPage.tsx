import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

function SallerPage() {

  const user = useSelector((store: RootState) => store.auth.auth);
  
  console.log(user)

  return (
    <div>
      <h1>Saller Page</h1>
      <div className="saller_info">
        <div className="name">
          <label htmlFor="saller_name"></label>
          <input type="text" id='saller_name' />
        </div>
        <div className="emal">
          <label htmlFor="saller_email"></label>
          <input type="text" id='saller_email' />
        </div>

      </div>
    </div>
  )
}

export default SallerPage