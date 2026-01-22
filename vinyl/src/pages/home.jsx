import React from 'react'

const Home = () => {
    const newsItems = [
        {
            id: 1,
            naam: "Welcome to Vinyl Culture",
            tekst: "Discover the timeless charm of vinyl records and join our community of passionate collectors and music enthusiasts.",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        {
            id: 2,
            naam: "Premium Sound Quality",
            tekst: "Experience music the way it was meant to be heard. Vinyl offers warmth and authenticity that digital cannot replicate.",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        },
        {
            id: 3,
            naam: "Curated Collections",
            tekst: "Browse through our hand-picked selection of rare and classic albums from decades past and present.",
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        }
    ]

    return (
        <div className='home-container'>
            {/* Header */}
            <header className='header'>
                <nav className='navbar'>
                    <ul className='nav-links'>
                        <li><a href='/' className='active'>Home</a></li>
                        <li><a href='/posts'>Posts</a></li>
                        <li><a href='/shop'>Shop</a></li>
                    </ul>
                </nav>
            </header>

            {/* Main Content */}
            <main className='main-content'>
                <section className='news-section'>
                    <div className='news-grid'>
                        {newsItems.map((item) => (
                            <article key={item.id} className='news-item'>
                                <div className='news-content'>
                                    <h3 className='news-title'>{item.naam}</h3>
                                    <p className='news-text'>{item.tekst}</p>
                                </div>
                                <div className='news-image' style={{ background: item.gradient }}>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className='footer'>
                <p>Footer met links en contact info</p>
            </footer>
        </div>
    )
}

export default Home