// import { useState, useEffect } from 'react';
import { Result } from '../interfaces';
import { Col } from 'react-bootstrap';
import Product from './Product';


interface IListProps {
  showingMilkType: string
  showingProducts: Result[]
}

const List = ({showingMilkType, showingProducts}: IListProps) => {

  console.log('showing Milk Type', showingMilkType);
  console.log('showing Products', showingProducts);

  const showingMilkT = showingMilkType


  return (
    <>
      {showingProducts.map((product, i) => (
        <Col key={i}>
          <Product
            product={product}
            showingMilkType={showingMilkT}
          />
        </Col>
      ))}
    </>
  )
}

export default List
