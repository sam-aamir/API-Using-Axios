import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/products';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(API_URL);
        if (isMounted) {
          setProducts(data);
          setError('');
        }
      } catch (err) {
        if (isMounted) {
          const message = err.response?.data?.message || err.message || 'Failed to load products.';
          setError(message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="app">
      <header className="app__header">
        <h1>Product List</h1>
      </header>
      <main className="app__content">
        {loading && <p className="status">Loading products...</p>}
        {error && <p className="status status--error">{error}</p>}
        {!loading && !error && (
          <div className="product-grid">
            {products.map((product) => (
              <article key={product.id} className="product-card">
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
                <button type="button">Buy Now</button>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
