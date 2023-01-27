import { useState, useEffect } from 'react';
import { Data, Result } from '../interfaces';
import List from '../components/List';
import ProductNumber from '../components/ProductNumber';
import { InputGroup, Row, Form } from 'react-bootstrap';
import axios from 'axios';

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
  const [search, setSearch] = useState<string>('');
  console.log('search', search)

  useEffect(() => {
      axios.get('/database.json')
      .then(res => {
        const dt = res.data;
        const productNumber = dt.count
        const productType = dt.results
        setData(dt);
        setShowingNumber(productNumber);
        setShowingProducts(productType);
      })
      .catch(() => {console.log('Error')})
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
    showMilkType !== 'All' ? setShowingProducts(data.results.filter(p => p.type === showMilkType)) : setShowingProducts(data.results)
    showMilkType !== 'All' ? setShowingNumber(data.results.filter(p => p.type === showMilkType).length) : setShowingNumber(data.count)
  }

  return (
    <div className="App">
        <header className='app-header'>
          <h1 className='app-title'>The Milk Store</h1>
          <h4>Milk you want? Got it we have.</h4>
        </header>
        <main className='main'>
          <section className='main-search-filter'>
            <Form>
              <InputGroup>
                <Form.Control onChange={e => setSearch(e.target.value)} placeholder='Αναζήτηση'></Form.Control>
              </InputGroup>
            </Form>
            <section className='main-filter'>
              <select className="select milk--filter" name="milk filter" onChange={(e) => filterMilkType(e)}>
                <option value="All">All</option>
                {typesOfMilk.map((milk, i) => (
                  <option value={milk} key={i}> {milk} </option>
                ))}
              </select>
            </section>
          </section>
          <ProductNumber showingNumber={showingNumber}/>

          <section className='list'>
            <Row md={2} xs={1} lg={3} className='row g-3'>
              <List 
                showingMilkType={showingMilkType}
                showingProducts={showingProducts}
                search={search}
              />
            </Row>
          </section>

        </main>
      </div>
  );
}

export default App;
