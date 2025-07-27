# Joe Store - Products Gallery Web Application

🎯 **Objective**
A fully functional, responsive Products Gallery web application built with React, Vite, and Tailwind CSS. The app provides users with a seamless e-commerce experience including product browsing, filtering, sorting, and cart management.

## ✨ Features

### 🛍️ Products Page
- **Data Fetching**: Fetches product data from [Fake Store API](https://fakestoreapi.com/products)
- **Product Cards**: Displays product name, image, price, and rating
- **Search Functionality**: Filter products by name (case-insensitive)
- **Sorting Options**: 
  - Price (Low to High / High to Low)
  - Name (A-Z / Z-A)
- **Responsive Design**: Mobile-first approach with beautiful UI

### 📄 Product Details Page
- **Dynamic Routing**: `/products/:id` route implementation
- **Detailed Information**: Product name, description, image, price, category
- **Rating Display**: Star ratings with review count
- **Add to Cart**: Direct purchase functionality

### 🛒 Cart Management
- **Add/Remove Items**: Full cart functionality
- **Quantity Control**: Increase/decrease item quantities
- **Order Summary**: Total calculation with shipping
- **Empty State**: User-friendly empty cart message

### 🌙 Dark Mode
- **Toggle Functionality**: Switch between light and dark themes
- **Persistent State**: Remembers user preference
- **Custom Color Scheme**: Uses specified colors (#ffffff, #171717)

## 🧱 Tech Stack

- **Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **API**: Fake Store API

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd joe-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📱 Screenshots

### Light Mode
- **Products Page**: Grid layout with search and filter functionality
- **Product Details**: Detailed product information with add to cart
- **Shopping Cart**: Cart management with quantity controls

### Dark Mode
- **Seamless Theme**: Automatic color scheme adaptation
- **Consistent UI**: All components support dark mode
- **User Preference**: Persistent theme selection

## 🎨 Design Features

- **Responsive Layout**: Works perfectly on all device sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Loading States**: Beautiful loading indicators
- **Error Handling**: User-friendly error messages

## 📁 Project Structure

```
joe-store/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   ├── pages/
│   │   ├── ProductsPage.jsx
│   │   ├── ProductDetails.jsx
│   │   └── CartPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🔧 Customization

### Colors
The application uses a custom color scheme defined in `tailwind.config.js`:
- Light Mode: `#ffffff`
- Dark Mode: `#171717`

### Styling
All custom styles are defined in `src/index.css` using Tailwind's `@layer` directive for better organization.

## 🌟 Key Features Implementation

### API Integration
- Fetches data from Fake Store API
- Handles loading and error states
- Implements proper error boundaries

### State Management
- React hooks for local state management
- Cart state persistence
- Dark mode preference storage

### Routing
- React Router for navigation
- Dynamic routes for product details
- Proper route protection

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ using React, Vite, and Tailwind CSS BY YOUSSEF MANSOUR**
