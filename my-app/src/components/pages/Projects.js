import React from 'react';
import casino from '../../images/casino.jpg';
import gaming from '../../images/gaming.jpg';
import library from '../../images/Library.jpg'
import project3 from '../../images/futureProject.jpg'


export default function Projects (){
    return(
        <div>
            <style type='text/css'>{ProjectCss}</style>
        <div className="container">
      <a href="https://snerowski.github.io/casino-worldwide/">
        <img src={casino} alt="Casino image" />
        <h3 className="project-title">Casino World</h3>
      </a>
      <a href="https://github.com/jeremystevens515/game-track">
        <img src={gaming} alt="Gaming" />
        <p className="project-title">Game-track</p>
      </a>
      <a href="https://warm-sea-87991.herokuapp.com/">
        <img src={library} alt="Google Books" />
        <p className="project-title">Book Search Engine</p>
      </a>
      <a href="https://github.com/Andres-Zetina">
        <img src={project3} alt="Project 3" />
        <p className="project-title">Future project 3</p>
      </a>
      <br></br>
      <footer className="footer">
        <a href="https://www.linkedin.com/in/andres-zetina-350662261/">LinkedIn</a>
        <a href="https://github.com/Andres-Zetina">GitHub</a>
      </footer>
    </div>
    </div>
    )
}

const ProjectCss = `
container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 10px;
}

a {
    display: block;
    position: relative;
}

img {
    width: 100%;
    height: auto;
}

.project-title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    font-size: 16px;
    padding: 5px;
    margin: 0;
}
 .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);
    }
.footer a {
        text-decoration: none;
        font-size: 18px;
      }
      
.footer a:hover {
 }

`