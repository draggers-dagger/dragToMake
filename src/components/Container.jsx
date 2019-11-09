import React, { useState, useEffect } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import Box from './Box'
import Button1 from './Button'
import update from 'immutability-helper'
import { Button, Card, DatePicker } from 'antd'
import Example from './e.jsx'
const styles = {
  top: "5vh",
  width: "80vw",
  height: "90vh",
  border: '1px solid black',
  position: 'relative',
  overflow: 'scroll'
}
const Container = ({ ...props }) => {
  const [boxesArray, setBoxesFunc] = useState([
    { id: 'b', top: 20, left: 20, title: <DatePicker /> },
    { id: 'c', top: 220, left: 30, title: <Button>haha</Button> },
  ])

  useEffect(() => {
    if (props.widget) {
      console.log(props.widget, "widgettt")
      const components = {
        component: props.widget
      };
      const id = Date.now()
      setBoxesFunc([...boxesArray, { id: id, top: 0, left: 0, title: props.widget }])
    }
  }, [props.widget]);

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

  }
  console.log(boxesArray, "objectt")
  return (
    <div style={styles}>
      <div style={{ width: "100%" }} ref={drop} style={{height:"300vh"}}>
        {boxesArray.map((item, i) => {
          const { left, top, title } = item
          return (
            <Box
              style={{ width: "100%" }}
              key={item.id}
              id={item.id}
              left={left}
              top={top}
            >
              {title}
            </Box>
          )
        })}
      </div>
    </div>
  )
}
export default Container
