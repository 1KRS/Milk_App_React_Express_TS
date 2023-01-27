// import { useState, useEffect } from 'react';
import { Result } from '../interfaces';
import { Col } from 'react-bootstrap';
import Product from './Product';


interface IProductNumberProps {
  showingNumber: number
}

const List = ({showingNumber}: IProductNumberProps) => {

  console.log('showing Number', showingNumber);

  return (
    <section>
      <h4>Number of Products: {showingNumber}</h4>
    </section>
  )
}

export default List
