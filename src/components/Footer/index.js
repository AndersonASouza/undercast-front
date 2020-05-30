import React from 'react';

import {
  FaGithubSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaGooglePlay,
} from 'react-icons/fa';
import Container from './styles';

function Footer() {
  return (
    <Container>
      <footer className="container-fluid py-4 bg-dark text-white-50">
        <div className=" text-center">
          <small>
            Reprodutor de podcasts &copy; Undercast, para mais informacoes,
            <a href="https://getbootstrap.com/"> visite meu site.</a>
          </small>
          <ul className="list-inline mx-auto float-right">
            <li className="list-inline-item">
              <a href="https://github.com/AndersonASouza/">
                <FaGithubSquare color="#211F1F" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://br.linkedin.com/in/anderson-a-de-souza-621364132">
                <FaLinkedin color="#2867B2" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://web.facebook.com/batatafritaepizza">
                <FaFacebookSquare color="#3b5998" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://twitter.com/Gordugordo">
                <FaTwitterSquare color="#1DA1F2" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://play.google.com/store/apps/details?id=br.com.undercast">
                <FaGooglePlay color="#B2BEC3" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
