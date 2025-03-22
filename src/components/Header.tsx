import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">ShopStore</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Products</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Categories</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
          </nav>
          <div className="flex items-center">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <ShoppingCartIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};