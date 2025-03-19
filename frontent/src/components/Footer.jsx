import React from "react";
import '../styles/footer.css'

const Footer = () => {
    return(
        <>
            <footer className="footer-container">
                    <p>&copy; {new Date().getFullYear()} Smit Sudani. All Rights Reserved.</p>
            </footer>
        </>
    )
}

export default Footer