import React from 'react'
import Card from 'react-bootstrap/Card';

function ImgCard() {
  return (
    <Card style={{ width: '100px', height:'100px', marginBottom:'5px'}}>
      <Card.Img variant="top" src={"holder.js/100px180?text=Image cap"} />
    </Card>
  )
}

export default ImgCard