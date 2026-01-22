import React, { useState } from 'react'

const Posts = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState('all')

  const postsData = [
    {
      id: 1,
      title: "Best Vinyl Records 2025",
      body: "Discover the most amazing vinyl records released this year...",
      color: "linear-gradient(135deg, #FF6B6B 0%, #FF8E72 100%)"
    },
    {
      id: 2,
      title: "Turntable Setup Guide",
      body: "Everything you need to know about setting up your turntable...",
      color: "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)"
    },
    {
      id: 3,
      title: "Classic Albums Review",
      body: "A deep dive into some of the most iconic albums ever made...",
      color: "linear-gradient(135deg, #FFD93D 0%, #FFA502 100%)"
    },
    {
      id: 4,
      title: "Vinyl vs Digital",
      body: "The timeless debate: why vinyl continues to dominate...",
      color: "linear-gradient(135deg, #A29BFE 0%, #6C5CE7 100%)"
    },
    {
      id: 5,
      title: "Record Cleaning Tips",
      body: "Keep your collection pristine with these essential tips...",
      color: "linear-gradient(135deg, #FF7E8E 0%, #E74C3C 100%)"
    },
    {
      id: 6,
      title: "Finding Rare Records",
      body: "Where and how to hunt for those hard-to-find albums...",
      color: "linear-gradient(135deg, #3498DB 0%, #2980B9 100%)"
    }
  ]

  const filteredPosts = postsData.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className='posts-container'>
      {/* Header */}
      <header className='header'>
        <nav className='navbar'>
          <ul className='nav-links'>
            <li><a href='/'>Home</a></li>
            <li><a href='/posts' className='active'>Posts</a></li>
            <li><a href='/shop'>shop</a></li>
            <li><a href='#login' className='login-btn'>Login</a></li>
          </ul>
        </nav>
      </header>

      <main className='main-content'>
        <div className='posts-wrapper'>
          {/* Sidebar Filter */}
          <aside className='posts-filter'>
            <h3>Filter Posts</h3>
            <div className='filter-group'>
              <label htmlFor='search'>Search:</label>
              <input
                id='search'
                type='text'
                placeholder='Search posts...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
          </aside>

          {/* Posts Grid */}
          <section className='posts-content'>
            <h2>Posts Search</h2>
            <div className='posts-grid'>
              {filteredPosts.map((post) => (
                <article key={post.id} className='post-card'>
                  <div
                    className='post-image'
                    style={{ background: post.color }}
                  >
                    <span className='post-number'>{post.id}</span>
                  </div>
                  <div className='post-content'>
                    <h3 className='post-title'>{post.title}</h3>
                    <p className='post-body'>{post.body}</p>
                    <button className='read-more'>Read More</button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className='footer'>
        <p>© 2025 Vinyl Records Community. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Posts
