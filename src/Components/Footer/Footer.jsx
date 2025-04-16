import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} WeatherApp.
            All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Footer
