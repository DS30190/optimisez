import { useEffect, useState }from "react";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Api (){
const [user, setUser] = useState([]);
    const getUser = async () => {
    const res = await fetch("https://api.github.com/users/github-john-doe");
    const json = await res.json();
   setUser(json);
    };
    useEffect(() => {
    getUser();
    }, []);
    return(
        <div>
            {user && ( 
    <>
      <h4>{user.name}</h4> 
      <p>Adresse: 123 Rue, Ville, Pays</p>
        <p>Téléphone: +1234567890</p>

      <div className="social-icons">
        
        <a href={user.html_url} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>

      </div>
    </>
  )}
        </div>
    ) 
}
export default Api;