import './todo-item.css'
import EditItem from '../edit-item'
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

export function TodoItem({ title, checkItem, removeItem, editItem, index }) {
  const [show, setShow] = useState(false);

  return (
    <div className="todo__item">
      <input type="checkbox" onChange={checkItem} />
      { title }
      <Button variant="danger" onClick={removeItem}>X</Button>
      <Button variant="info" onClick={() => setShow(true)}>Edit</Button>
      <EditItem show={show} index={index} editItem={editItem} onHide={() => setShow(false)}/>
    </div>
  )
}