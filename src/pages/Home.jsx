import { Link } from "react-router-dom";
import Apropos from "./Apropos";

const Home = () => {
    return (
       <div> 
            <div className="intro-section">
                <h1>Bonjour, je suis John Doe</h1>
                <h2>Développeur web full stack</h2>
                <Link to="/apropos">
                    <button className="custom-button">En savoir plus</button>
                </Link>
            </div>
            
            <div className="apropos-container">
                <Apropos />
            </div>
            
        </div>
    )
}
export default Home;