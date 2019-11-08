import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import Box from './Box'
import Button1 from './Button'
import update from 'immutability-helper'
import { Button, Card, DatePicker } from 'antd'

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

  const [boxesArray, setBoxesFunc] = useState([
    { id: 'a', top: 10, left: 0, title: 'Drag me around' },
    { id: 'b', top: 20, left: 20, title: <DatePicker /> },
    { id: 'c', top: 220, left: 30, title: <Button>haha</Button> },
  ])

  const [, drop] = useDrop({
    accept: [ItemTypes.BOX, ItemTypes.BUTTON],
    drop(item, monitor) {
      console.log(item, "itemmmm")
      const delta = monitor.getDifferenceFromInitialOffset()
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)
      moveBox(item.id, left, top)
      return undefined
    },
  })

  const moveBox = async (id, left, top) => {
    console.log(id, left, top, "boxess")
    var objIndex = boxesArray.findIndex((obj => obj.id == id));
    // boxesArray[objIndex].left = left
    // boxesArray[objIndex].top = top
    // console.log(boxesArray, "arrray")
    console.log(
      update(boxesArray, {
        [objIndex]: {
          left: { $set: left },
          top: { $set: top }
        }
      })
    )
    setBoxesFunc(
      update(boxesArray, {
        [objIndex]: {
          left: { $set: left },
          top: { $set: top }
        }
      }))
    // setBoxes(
    //   update(boxes, {
    //     [id]: {
    //       $merge: { left, top },
    //     },
    //   }),
    // )

  }
  console.log(boxesArray, "objectt")
  return (
    <div ref={drop} style={styles}>
      {/* {Object.keys(boxes).map(key => {
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
      })} */}
      {boxesArray.map((item, i) => {
        const { left, top, title } = item
        return (
          <Box
            key={item.id}
            id={item.id}
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
