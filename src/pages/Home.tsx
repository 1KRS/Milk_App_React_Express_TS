import { useState, useEffect } from 'react';
import { db } from '../data/db';
import { Data, Result } from '../interfaces';
import List from '../components/List';
import ProductNumber from '../components/ProductNumber';
import { Row } from 'react-bootstrap';

function App() {
  const [data, setData] = useState<Data>({
    count: 0,
    results: []
  })
  const [showingMilkType, setShowingMilkType] = useState<string>('All')
  const [showingNumber, setShowingNumber] = useState<number>(0)
  const [showingProducts, setShowingProducts] = useState<Result[]>([{
    name: '',
    type: '',
    storage: 0,
    id: ''
  }])

  useEffect(() => {
    const dt = db;
    const productNumber = dt.count
    const productType = dt.results
    setData(dt);
    setShowingNumber(productNumber);
    setShowingProducts(productType);
  }, [])

  const typesOfMilk = [
    'Whole milk', 
    'Oat milk', 
    'Pea milk', 
    'Almond milk', 
    'Rice milk', 
    'Coconut milk', 
    'Soy milk', 
    'Walnut milk', 
    'Macadamia milk', 
    'Hemp milk', 
    'Cashew milk'
  ]

  const filterMilkType = async (e: any) => {
    const showMilkType = e.target.value;
    await setShowingMilkType (showMilkType)
    const filteredProducts = data.results.filter(p => p.type === showMilkType)
    await setShowingProducts(filteredProducts);
    const productNumber = data.results.filter(p => p.type === showMilkType).length;
    await setShowingNumber(productNumber);
  }

  console.log('showingNumber', showingNumber);

  return (
    <>
      <div className="App">
        <header className='app-header'>
          <h1 className='app-title'>The Milk Store</h1>
          <h4>Milk you want? Got it we have.</h4>
        </header>
        <main className='main'>
          <section className='main-search-filter'>
            <h4>Search</h4>
            <section className='main-filter'>
              <select className="select milk--filter" name="milk filter" onChange={(e) => filterMilkType(e)}>
                <option value="ALL">All</option>
                {typesOfMilk.map((milk, i) => (
                  <option value={milk} key={i}> {milk} </option>
                ))}
              </select>
            </section>
          </section>
          <ProductNumber showingNumber={showingNumber}/>
          <section className='list'>
            <Row md={2} xs={1} lg={3} className='g-3'>
              <List 
                showingMilkType={showingMilkType}
                showingProducts={showingProducts}
              />
            </Row>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
