
const Realisations = () => {
    return (
        <div>
            <img class="banner" src="/images/banner.jpg" alt="bannière"></img>
            <h1>PORTFOLIO</h1>
            <p class="card-text">Voici quelques-unes de mes réalisations.</p>
            <p className="line"></p>
            <div class="row mx-auto">
       
        <div class="col-sm-6 col-md-4 mb-4">
            <div class="card">
                <img src="/images/portfolio/fresh-food.jpg" class="card-img-top" alt="Image du projet"></img>
                <div class="card-body">
                    <h2 class="card-title">Fresh food</h2>
                    <p class="card-texte">Réalisation  d'un  site  avec  commande  en          ligne.</p>
                    <a href="#" class="btn btn-primary">Voir</a>
                    <div class="bg-gray">
                <p class="card-text">Site réalisé avec PHP et MySQL</p> 
            </div>
                </div>
            </div>
        </div>

        
        <div class="col-sm-6 col-md-4 mb-4">
            <div class="card">
                <img src="/images/portfolio/restaurant-japonais.jpg" class="card-img-top" alt="Image du projet"></img>
                <div class="card-body">
                    <h2 class="card-title">Restaurant Akira</h2>
                    <p class="card-texte">Réalisation d'un site vitrine.</p>
                    <a href="#" class="btn btn-primary">Voir</a>
                    <div class="bg-gray">
                <p class="card-text">Site réalisé avec WordPress</p> 
            </div>
                </div>
            </div>
        </div>

        
        <div class="col-sm-6 col-md-4 mb-4">
            <div class="card">
                <img src="/images/portfolio/espace-bien-etre.jpg" class="card-img-top" alt="Image du projet"></img>
                <div class="card-body">
                    <h2 class="card-title">Espace bien-être</h2>
                    <p class="card-texte">Réalisation d'un site vitrine pour un praticien de bien-être.</p>
                    <a href="#" class="btn btn-primary">Voir</a>
                    <div class="bg-gray">
                <p class="card-text">Site réalisé avec HTML/CSS</p> 
            </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}
export default Realisations;