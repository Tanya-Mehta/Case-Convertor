import React , {useState}from 'react'

export default function Alert(props) {
const capitalize=(word)=>{
  const lower= word.toLowerCase();
  return lower.charAt(0).toUpperCase()+lower.slice(1);
}
// cls cumilative layout shift 
  return (
    <div style={{height:'50px'}}>
      {/* alert value is null  */}
       {props.alert  &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert">
        <strong> {capitalize(props.alert.type)}</strong> : {props.alert.msg}
      </div>}
    </div>
  

  )
}
