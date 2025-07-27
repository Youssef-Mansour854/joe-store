import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Loader2 } from 'lucide-react';

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error('Product not found');
      }
      const data = await response.json();
      setProduct(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex items-center space-x-2">
          <Loader2 size={24} className="animate-spin text-black dark:text-white" />
          <span className="text-black dark:text-white">Loading product...</span>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400 mb-4">
            {error || 'Product not found'}
          </p>
          <Link to="/" className="bg-black dark:bg-white text-white dark:text-black font-medium py-2 px-4 rounded-lg transition-colors duration-200">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Back Button */}
      <Link 
        to="/" 
        className="inline-flex items-center space-x-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 mb-6 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back to Products</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-white dark:bg-black rounded-lg p-8 shadow-md border border-gray-800 dark:border-gray-600">
          <div className="bg-black dark:bg-gray-800 rounded-lg p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Category */}
          <div className="inline-block bg-gray-100 dark:bg-white text-black dark:text-black px-3 py-1 rounded-full text-sm font-medium">
            {product.category}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-black dark:text-white">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={`${
                    i < Math.floor(product.rating?.rate || 0)
                      ? 'text-gray-600 dark:text-gray-400 fill-current'
                      : 'text-gray-400 dark:text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-black dark:text-white">
              {product.rating?.rate} ({product.rating?.count} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="text-4xl font-bold text-black dark:text-white">
            ${product.price}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
              Description
            </h3>
            <p className="text-black dark:text-white leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-black dark:bg-white text-white dark:text-black font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 py-4 text-lg"
          >
            <ShoppingCart size={24} />
            <span>Add to Cart</span>
          </button>

          {/* Additional Info */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-800 dark:border-gray-600">
            <h3 className="font-semibold text-black dark:text-white mb-2">
              Product Information
            </h3>
            <div className="space-y-2 text-sm text-black dark:text-white">
              <p><span className="font-medium">Category:</span> {product.category}</p>
              <p><span className="font-medium">Rating:</span> {product.rating?.rate}/5</p>
              <p><span className="font-medium">Reviews:</span> {product.rating?.count}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 