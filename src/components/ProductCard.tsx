import { Button } from './Button';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  description: string;
}

export const ProductCard = ({ title, price, image, description }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold">${price}</span>
          <Button variant="primary">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};