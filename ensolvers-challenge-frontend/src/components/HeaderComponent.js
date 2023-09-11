import React from 'react'

export const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div>
                    <a href='/' className='navbar-brand'>Notes Manager</a>
                </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent;