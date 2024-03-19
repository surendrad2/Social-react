import React from 'react'
import Comment from '../comment/Comment'
export default function Homeitems(props) {
    const item = props.item
  return (
    <div>
        <div>{item.userId}</div>
        <div>{item.title}</div>
        <div>{item.body}</div>
        <Comment id={item.id}/>
    </div>
  )
}
