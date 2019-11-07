import React from 'react'
import { useDrag } from 'react-dnd'
import ItemTypes from './ItemTypes'
const style = {
  position: 'absolute',
//   border: '1px dashed pink',
//   backgroundColor: 'yellow',
//   padding: '0.5rem 1rem',
//   cursor: 'move',
}
const Box = ({ id, left, top, hideSourceOnDrag, children }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: ItemTypes.BUTTON },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  if (isDragging && hideSourceOnDrag) {
    return (
      
      <React.Fragment>
        <div ref={drag} />
        <h4>maza arha h na?</h4>
      </React.Fragment>
    )
  }
  return (
    // <div ref={drag} style={{ ...style, left, top }}>
      <button ref={drag} >{children}</button>
    // </div>
  )
}
export default Box
