import react from "react";
import "./header.css";

export default function Header() {

    return (
        <div className="header">
            <img src="https://datacom.com/content/dam/logos/datacom-logos/datacom-brand-logos/Datacom-Primary-Logo-RGB.svg" alt="datacomLogo" className="logo"></img>
            <div className="link">
                <a href="#">Solutions</a>
                <a href="#">Industries</a>
                <a href="#">Discover</a>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
            </div>
            <div className="icon">
                <button className="signIn">Sign in</button>
               <img src="https://img.icons8.com/ios/35/000000/search--v1.png" className="search" />
            </div>
        </div>
    )
}

