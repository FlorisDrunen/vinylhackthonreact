import React from 'react'
import '../styles/home.css'

const Home = () => {
    const newsItems = [
        {
            id: 1,
            naam: "Nieuws naam",
            tekst: "Nieuws text",
            foto: "https://via.placeholder.com/200x200?text=Nieuws+foto"
        },
        {
            id: 2,
            naam: "Nieuws naam",
            tekst: "Nieuws text",
            foto: "https://via.placeholder.com/200x200?text=Nieuws+foto"
        },
        {
            id: 3,
            naam: "Nieuws naam",
            tekst: "Nieuws text",
            foto: "https://via.placeholder.com/200x200?text=Nieuws+foto"
        }
    ]

    return (
        <div className='home-container'>
            {/* Header */}
            <header className='header'>
                <nav className='navbar'>
                    <ul className='nav-links'>
                        <li><a href='#home' className='active'>Home</a></li>
                        <li><a href='#contactus'>Contactus</a></li>
                        <li><a href='#diensten'>Diensten</a></li>
                        <li><a href='#shop'>Shop</a></li>
                        <li><a href='#login' className='login-btn'>Login</a></li>
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
                                <div className='news-image'>
                                    <img src={item.foto} alt={item.naam} />
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