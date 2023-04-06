import React from 'react';
import casino from '../../images/casino.jpg';
import gaming from '../../images/gaming.jpg';
import library from '../../images/Library.jpg'
import project3 from '../../images/futureProject.jpg'


export default function Projects (){
    return(
        <div>
          <h1 className="text-center name-header">Projects</h1>
            <style type='text/css'>{ProjectCss}</style>
        <div className="container">
      <a href="https://snerowski.github.io/casino-worldwide/">
        <img src={casino} alt="Casino image" className="project-image" />
        <h3 className="project-title">Casino World</h3>
      </a>
      <a href="https://github.com/jeremystevens515/game-track">
        <img src={gaming} alt="Gaming" className="project-image" />
        <h3 className="project-title">Game-track</h3>
      </a>
      <a href="https://warm-sea-87991.herokuapp.com/">
        <img src={library} alt="Google Books" className="project-image" />
        <h3 className="project-title">Book Search Engine</h3>
      </a>
      <a href="https://evening-fjord-31018.herokuapp.com/">
        <img src={project3} alt="Project 3" className="project-image" />
        <h3 className="project-title">ChatBite</h3>
      </a>
      <br></br>
      
    </div>
    </div>
    )
}

const ProjectCss = `
.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 10px;
    height: 650px;
    margin-bottom: 100px;
}
.name-header {
  margin-bottom: 20px;
  font-size: 75px;
}

a {
    display: block;
    position: relative;
}

.project-image {
    width: 100%;
    height: 325px;
    object-fit: cover;
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
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
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
