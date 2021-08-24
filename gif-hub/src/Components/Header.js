import React from 'react'

const Header = () => {
    return (
        <header className="navbar">
            <p>
                GifHub
            </p>
            <button type='home'>Home</button>
            <button type='login'>Login</button>
            <button type='search'>Search</button>
            <button type='addgif'>Upload Gif</button>
        </header>
    )
}

export default Header
