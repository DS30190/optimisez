import React from 'react';
import { Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Mentions = () => {
  return (
    <>
      <meta name="robots" content="noindex,nofollow" />
      <div className="mentions-container">
        <h1>MENTIONS LEGALES</h1>
        <p className="line"></p><br />
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Éditeur du site</Accordion.Header>
            <Accordion.Body>
              
                <h2>John Doe</h2>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 40 Rue Laure Diebold <br />
                 69009 Lyon, France <br />
                 <FontAwesomeIcon icon={faPhone} /> <a href="tel:+33620304050"><span className="text-link">06 20 30 40 50</span></a> <br />
    <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:john.doe@gmail.com"><span className="text-link">john.doe@gmail.com</span></a>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur du site</Accordion.Header>
            <Accordion.Body>
             
                <h2>Always Data</h2>
                <p> 91 rue du Faubourg Saint Honoré <br />
                75008 Paris
              </p>
              <p>
            <FontAwesomeIcon icon={faGlobe} /> <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a>
          </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
              <h2>Crédits</h2>
              <p>Site développé par John Doe, étudiant du CEF.</p>
              <p>
                Les images libres de droit sont issues du site <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a>.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <footer>
        <p>© Designed by John Doe</p>
      </footer>
    </>
  );
}

export default Mentions;
