import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import Box from './Box'
import Button1 from './Button'
import update from 'immutability-helper'
import {Button, Card, DatePicker} from 'antd'

const styles = {
  width: 1500,
  height: 800,
  border: '1px solid black',
  position: 'relative',
}
const Container = ({ hideSourceOnDrag }) => {
  const [boxes, setBoxes] = useState({
    a: { top: 0, left: 0, title: 'Drag me around' },
    b: { top: 180, left: 20, title: <DatePicker /> },
    c: { top: 160, left: 30, title: <Button>haha</Button> },
  })

  const [, drop] = useDrop({
    accept: [ItemTypes.BOX, ItemTypes.BUTTON],
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset()
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)
      moveBox(item.id, left, top)
      return undefined
    },
  })

  const moveBox = (id, left, top) => {
    console.log(id, left, top, "boxess")
    setBoxes(
      update(boxes, {
        [id]: {
          $merge: { left, top },
        },
      }),
    )
  }

  console.log(boxes, "boxess")
  return (
    <div ref={drop} style={styles}>
      {Object.keys(boxes).map(key => {
        const { left, top, title } = boxes[key]
        return (
          <Box
            key={key}
            id={key}
            left={left}
            top={top}
            hideSourceOnDrag={hideSourceOnDrag}
          >
            {title}
          </Box>
        )
      })}
    </div>
  )
}
export default Container
