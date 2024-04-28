import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
    return (
        <div>
            <div className="cont">
           <section class="contact-section" style={{ backgroundColor: "white" }}>
    <div className="container">
        <h2>ME CONTACTER</h2>
        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
        <p className="line"></p>
        <div class="row mx-auto">
            
            <div class="form col-md-6 col-12">
                <h3 className="about-heading">Formulaire de contact</h3>
                <form action="#" method="post">
                <div class="mb-3 input-group">
                        <label class="input-group-text">Votre nom</label>
                        <input type="text" id="nom" name="nom" class="form-control" required></input>
                    </div>
                    <div class="mb-3 input-group">
                        <label class="input-group-text">Votre email</label>
                        <input type="email" id="email" name="email" class="form-control" required></input>
                    </div>
                    <div class="mb-3 input-group">
                        <label class="input-group-text">Votre numéro de téléphone *</label>
                        <input type="tel" id="telephone" name="telephone" class="form-control" required></input>
                    </div>
                    <div class="mb-3 input-group">
                        <label class="input-group-text">Sujet *</label>
                        <input type="text" id="sujet" name="sujet" class="form-control" required></input>
                    </div>
                    <div class="mb-3 input-group">
                        <label class="input-group-text">Votre message *</label>
                        <textarea id="message" name="message" class="form-control" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-blog">Envoyer</button>
                </form>
            </div>

            
            <div class="form col-md-6 col-12">
                <h3 className="about-heading">Mes coordonnées</h3>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 40 Rue Laure Diebold 
                 69009 Lyon, France <br />
                <FontAwesomeIcon icon={faPhone} /> 06 20 30 40 50 <br /></p>
               
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.9213730205855!2d4.793666515667356!3d45.77892162508823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4efbf4eb6bfeb%3A0x6c5cfa4177b1685d!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sen!2sus!4v1649905975683!5m2!1sen!2sus" width="100%" height="300" style={{ border: '0' }} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    </div>
</section>

</div>
        </div>
    )
}
export default Contact;