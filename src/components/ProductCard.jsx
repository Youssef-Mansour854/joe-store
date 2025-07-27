import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link to={`/products/${product.id}`} className="block">
      <div className="bg-white dark:bg-black rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-800 dark:border-gray-600 p-4 h-full flex flex-col group">
        {/* Product Image */}
        <div className="relative mb-4 overflow-hidden rounded-lg bg-black dark:bg-gray-800">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col">
          <h3 className="font-semibold text-black dark:text-white text-sm mb-2 line-clamp-2">
            {product.title}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${
                    i < Math.floor(product.rating?.rate || 0)
                      ? 'text-gray-600 dark:text-gray-400 fill-current'
                      : 'text-gray-400 dark:text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-black dark:text-white ml-1">
              ({product.rating?.count || 0})
            </span>
          </div>

          {/* Price */}
          <div className="mt-auto">
            <p className="text-lg font-bold text-black dark:text-white mb-3">
              ${product.price}
            </p>
            
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-black dark:bg-white text-white dark:text-black font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <ShoppingCart size={16} />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard; 