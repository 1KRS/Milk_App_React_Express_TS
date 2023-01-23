import { useState, useEffect } from 'react';
import { db } from './data/db';
import { Data } from './interfaces';
import './App.css';
import Product from './components/Product';
// import { Container } from 'react-bootstrap';

function App() {

  const [data, setData] = useState<Data>({
    count: 0,
    results: []
  })

  useEffect(() => {
    const dt = db;
    setData(dt);
  }, [])
  
  const productNumber = data.count
  const products = data.results
  console.log('data', products);

  return (
    // <Container>
    <>
      <div className="App">
        <header className='app-header'>
          <h1 className='app-title'>The Milk Store</h1>
          <h4>Milk you want? Got it we have.</h4>
        </header>
        <main className='main'>
          <section className='main-search-filter'>
            <h4>Search</h4>
            <h4>Filter</h4>
          </section>
          <section>
            <h4>Number of Products: {productNumber}</h4>
          </section>

          <div className='accordion'>
            {products.map((product, i) => (
              <Product product={product} key={i}/>
            ))}
          </div>
        </main>
      </div>
    </>
    // </Container>
    
  );
}

export default App;
