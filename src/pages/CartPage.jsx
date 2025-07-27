import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';

const CartPage = ({ cart, removeFromCart, updateQuantity }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mb-6">
          <ShoppingBag size={64} className="mx-auto text-black dark:text-white" />
        </div>
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
          Your cart is empty
        </h2>
        <p className="text-black dark:text-white mb-6">
          Looks like you haven't added any products to your cart yet.
        </p>
        <Link to="/" className="bg-black dark:bg-white text-white dark:text-black font-medium py-2 px-4 rounded-lg transition-colors duration-200">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-black dark:text-white mb-8">
        Shopping Cart ({cart.length} items)
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="bg-white dark:bg-black rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-800 dark:border-gray-600 p-4">
              <div className="flex items-center space-x-4">
                {/* Product Image */}
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain bg-gray-100 dark:bg-gray-800 rounded-lg"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-black dark:text-white text-sm line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-black dark:text-white font-bold">
                    ${item.price}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 rounded-full bg-gray-100 dark:bg-white hover:bg-gray-200 dark:hover:bg-gray-100 transition-colors"
                  >
                    <Minus size={16} className="text-black" />
                  </button>
                  <span className="w-8 text-center font-medium text-black dark:text-white">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded-full bg-gray-100 dark:bg-white hover:bg-gray-200 dark:hover:bg-gray-100 transition-colors"
                  >
                    <Plus size={16} className="text-black" />
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              {/* Item Total */}
              <div className="mt-4 pt-4 border-t border-gray-800 dark:border-gray-600">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-black dark:text-white">
                    Item Total:
                  </span>
                  <span className="font-bold text-black dark:text-white">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-black rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-800 dark:border-gray-600 p-6 sticky top-4">
            <h2 className="text-xl font-bold text-black dark:text-white mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-black dark:text-white">Subtotal:</span>
                <span className="text-black dark:text-white">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-black dark:text-white">Shipping:</span>
                <span className="text-black dark:text-white">Free</span>
              </div>
              <div className="border-t border-gray-800 dark:border-gray-600 pt-3">
                <div className="flex justify-between font-bold text-lg">
                  <span className="text-black dark:text-white">Total:</span>
                  <span className="text-black dark:text-white">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full bg-black dark:bg-white text-white dark:text-black font-medium py-2 px-4 rounded-lg transition-colors duration-200 py-3 text-lg">
              Proceed to Checkout
            </button>

            <Link 
              to="/" 
              className="w-full bg-gray-200 dark:bg-white text-black dark:text-black font-medium py-2 px-4 rounded-lg transition-colors duration-200 mt-3 py-3 text-center block"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage; 