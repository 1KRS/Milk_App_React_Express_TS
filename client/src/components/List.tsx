import { Result } from '../interfaces';
import { Col } from 'react-bootstrap';
import Product from './Product';


interface IListProps {
  showingMilkType: string
  showingProducts: Result[]
  search: string
}

const List = ({showingMilkType, showingProducts, search}: IListProps) => {

  const showingMilkT = showingMilkType

  return (
    <>
      {showingProducts
        .filter(item => {return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)})
        .map((product, i) => (
          <Col key={i}>
            <Product
              product={product}
              showingMilkType={showingMilkT}
            />
          </Col>
        ))
      }
    </>
  )
}

export default List
