import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur web full stack</h2>
            <Link to="/apropos">
        <button className="custom-button">En savoir plus</button>
      </Link>
        </div>
    )
}
export default Home;