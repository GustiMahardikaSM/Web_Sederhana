import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';

const products = [
  {
    id: 1,
    title: "MacBook Pro M2",
    price: 1499.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    description: "Powerful laptop with M2 chip, perfect for professionals and creators."
  },
  {
    id: 2,
    title: "iPhone 15 Pro",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
    description: "Latest iPhone with pro camera system and dynamic island."
  },
  {
    id: 3,
    title: "iPad Air",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
    description: "Versatile tablet for work and entertainment."
  },
  {
    id: 4,
    title: "AirPods Pro",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500",
    description: "Premium wireless earbuds with active noise cancellation."
  },
  {
    id: 5,
    title: "Apple Watch Ultra",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500",
    description: "Advanced smartwatch for fitness and everyday use."
  },
  {
    id: 6,
    title: "Magic Keyboard",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    description: "Premium keyboard with amazing typing experience."
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;