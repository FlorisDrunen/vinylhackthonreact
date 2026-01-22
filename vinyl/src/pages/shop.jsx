import React, { useState } from 'react'

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [priceFilter, setPriceFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')

  const products = [
    {
      id: 1,
      name: "Classic Vinyl LP",
      price: 24.99,
      category: "vinyl",
      color: "linear-gradient(135deg, #E8D5C4 0%, #D4A574 100%)"
    },
    {
      id: 2,
      name: "Premium Record",
      price: 34.99,
      category: "vinyl",
      color: "linear-gradient(135deg, #D4C5B9 0%, #A89080 100%)"
    },
    {
      id: 3,
      name: "Vintage Album",
      price: 29.99,
      category: "vinyl",
      color: "linear-gradient(135deg, #E0D0C0 0%, #C9A67A 100%)"
    },
    {
      id: 4,
      name: "Rare Edition",
      price: 44.99,
      category: "rare",
      color: "linear-gradient(135deg, #D9C9B8 0%, #B8956A 100%)"
    },
    {
      id: 5,
      name: "Studio Master",
      price: 39.99,
      category: "vinyl",
      color: "linear-gradient(135deg, #E5D5C8 0%, #D4A574 100%)"
    },
    {
      id: 6,
      name: "Deluxe Box Set",
      price: 59.99,
      category: "boxset",
      color: "linear-gradient(135deg, #D4B5A0 0%, #A89080 100%)"
    },
    {
      id: 7,
      name: "Limited Edition",
      price: 49.99,
      category: "rare",
      color: "linear-gradient(135deg, #E0D0C0 0%, #C9A67A 100%)"
    },
    {
      id: 8,
      name: "Collector's Item",
      price: 54.99,
      category: "boxset",
      color: "linear-gradient(135deg, #D9C9B8 0%, #B8956A 100%)"
    },
  ]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter
    const matchesPrice = priceFilter === 'all' || 
      (priceFilter === 'low' && product.price < 30) ||
      (priceFilter === 'mid' && product.price >= 30 && product.price < 45) ||
      (priceFilter === 'high' && product.price >= 45)
    
    return matchesSearch && matchesCategory && matchesPrice
  })

  return (
    <div className='shop-container'>
      {/* Header */}
      <header className='header'>
        <nav className='navbar'>
          <ul className='nav-links'>
            <li><a href='/'>Home</a></li>
            <li><a href='/posts'>Posts</a></li>
            <li><a href='/shop' className='active'>Shop</a></li>
            <li><a href='#login' className='login-btn'>Login</a></li>
          </ul>
        </nav>
      </header>

      <main className='main-content'>
        <div className='shop-wrapper'>
          {/* Sidebar Filter */}
          <aside className='shop-filter'>
            <h3>Shop filters</h3>
            
            <div className='filter-group'>
              <label htmlFor='search-filter'>Search:</label>
              <input
                id='search-filter'
                type='text'
                placeholder='Search products...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className='filter-group'>
              <label htmlFor='category'>Category:</label>
              <select
                id='category'
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value='all'>All Categories</option>
                <option value='vinyl'>Vinyl Records</option>
                <option value='rare'>Rare Finds</option>
                <option value='boxset'>Box Sets</option>
              </select>
            </div>

            <div className='filter-group'>
              <label htmlFor='price'>Price Range:</label>
              <select
                id='price'
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
              >
                <option value='all'>All Prices</option>
                <option value='low'>Under $30</option>
                <option value='mid'>$30 - $45</option>
                <option value='high'>$45+</option>
              </select>
            </div>
          </aside>

          {/* Shop Grid */}
          <section className='shop-content'>
            <h2>Shop search</h2>
            <div className='shop-grid'>
              {filteredProducts.map((product) => (
                <article key={product.id} className='product-card'>
                  <div
                    className='product-image'
                    style={{ background: product.color }}
                  >
                    <span className='product-photo'>Photo of product</span>
                  </div>
                  <div className='product-content'>
                    <h3 className='product-name'>{product.name}</h3>
                    <p className='product-price'>${product.price}</p>
                    <button className='add-to-cart'>Add to Cart</button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className='footer'>
        <p>© 2025 Vinyl Records Shop. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Shop
