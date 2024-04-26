
const Services = () => {
    return (
        <div className="total">
            <img class="banner" src="/images/banner.jpg" alt="bannière"></img>
            <h1>MON OFFRE DE SERVICES</h1>
            <p>Voici les prestations sur lesquelles je peux intervenir.</p>
            <p className="line"></p>
            <div class="row">
            <div class="col1 col-md-3 mb-3">
            <i class="fas fa-desktop"></i>
            <h3>UX DESIGN</h3>
            <p>L'<strong> UX Design</strong>est une méthode de conception centrée sur 
            l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
    </div>
    <div class="col2 col-md-3 mb-3">
    <i class="fas fa-solid fa-file"></i>
        <h3>DEVELOPPEMENT WEB </h3>
        <p>Le <strong> développement de sites web</strong> repose sur l'utilisation des langages 
         <span class="underline"> HTML</span>, <span class="underline">CSS</span>, Javascript et <span class="underline">PHP</span>.</p>
                </div>
    <div class="col3 col-md-3 mb-3">
            <i class="fas fa-search "></i>
            <h3>REFERENCEMENT</h3>
        <p>Le <strong> référencement naturel d'un site</strong>, aussi appelé <span class="underline">SEO</span>, consiste à mettre des techniques
        en oeuvre pour <i> améliorer sa position</i> dans les résultats des moteurs de recherche.</p>
    </div>
</div>

        </div>
    )
}
export default Services;