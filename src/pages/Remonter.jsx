import { useEffect } from "react";

function Remote(){
useEffect(() => {
    const handleScroll = () => {
      const backToTopBtn = document.getElementById('back-to-top');
      if (backToTopBtn) {
        backToTopBtn.style.display = window.scrollY > 20 ? 'block' : 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return(
    <div>
        <p>&copy; {new Date().getFullYear()} John Doe. Tous droits réservés.</p>
      <a href="#top" id="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ display: 'none' }}>
    Remonter en Haut
</a>
    </div>
  )
}
export default Remote;