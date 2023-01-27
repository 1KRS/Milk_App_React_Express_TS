import { Result } from '../interfaces';
import { Col } from 'react-bootstrap';
import Product from './Product';


interface IListProps {
  showingMilkType: string
  showingProducts: Result[]
}

const List = ({showingMilkType, showingProducts}: IListProps) => {

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