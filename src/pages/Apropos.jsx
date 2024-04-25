const Apropos = () => {
    return (
<div className="container-fluid">
    <div className="row">
        {/* Colonne de gauche qui prend 6 colonnes sur petit écran et au-delà */}
        <div className="col-sm-6">
        <div className="box ">
                <h2 className="about-heading" >À propos</h2>
                <div id="text">
                    <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation
                         <strong>d'intégrateur-développeur web</strong> au CEF. Au cours de cette formation,
                         j'ai pu acquérir des bases solides pour travailler dans le domaine du
                         <strong> développement web.</strong></p>
                         <p>Basé à Lyon, je suis à la recherche d'une alternance au sein d'une agence digitale
                            pour consolider ma formation de <strong> développeur web full stack .</strong></p>
                        <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte
                             les bonnes pratiques du web</p>
                </div>
            </div>
        </div>

        {/* Colonne de droite qui prend 6 colonnes sur petit écran et au-delà, contient deux sous-colonnes */}
        <div className="col-sm-6">
            <div id="photo" className="box">

            </div>
            <div className="box">
                <h3>Mes compétences</h3>
                
                <p>HTML5 90%</p>
                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                    <div className="progress-bar bg-danger" style={{ width: '90%' }}>90%</div>
                </div>
                <p>CSS3 80%</p>
                <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                    <div className="progress-bar bg-info text-dark" style={{ width: '80%' }}>80%</div>
                </div>
            
                <p>JAVASCRIPT 70%</p>
                <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>
                    <div className="progress-bar bg-warning text-dark" style={{ width: '70%' }}>70%</div>
                </div>
                <p>PHP 60%</p>
                <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                    <div className="progress-bar bg-success" style={{ width: '60%' }}>60%</div>
                </div>

                <p>REACT 50%</p>
                <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                    <div className="progress-bar bg-sucess" style={{ width: '50%' }}>50%</div>
                </div>
            </div>
        </div>
    </div>
</div>


    )
}
export default Apropos;