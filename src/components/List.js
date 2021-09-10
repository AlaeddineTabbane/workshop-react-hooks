import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from './Card'
function List({ list }) {
  return (
    <Row>
      {list.map((value, index) => (
        <Col xs='12' sm='4' lg='3' key={index} className='mb-3'>
          <Card element={value} />
        </Col>
      ))}
    </Row>
  )
}

export default List
