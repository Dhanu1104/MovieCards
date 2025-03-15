import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import img1 from "../src/assets/IT.jpg";
import img2 from "../src/assets/dead silence.jpg";
import img3 from "../src/assets/Lights_Out_poster.webp";
import img4 from "../src/assets/theconjuring.jpg";
import img5 from "../src/assets/talk to me.jpg";
import img6 from "../src/assets/smile-2.jpeg";


const Card =({ image,title,description}) =>{
  return(
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card movie-card">
      <div className="card-img-container">
        <img src={image} className="card-img-top" alt={title} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};
const App = () =>{
  const cardsData = [
    {
      image : img1,
      title : "IT",
      description : " The movie is about a group of children who face their fears when they encounter a murderous clown named Pennywise.", 
    },
    {
      image : img2,
      title :"Dead Silence",
      description : " After his wife meets a grisly end, Jamie Ashen returns to his haunted hometown of Ravens Fair to find answers. His investigation leads him to the ghost of a ventriloquist named Mary Shaw who seems to have ties to his entire family tree.",
    },
    {
      image : img3,
      title :"Lights out",
      description : "A young woman realizes that her mother is possessed by a supernatural spirit that hunts only in the dark. However, a spate of murders compels her to confront the spirit and save her family.",
    },
    {
      image : img4,
      title :"The Conjuring",
      description : "Rod and Carolyn find their pet dog dead under mysterious circumstances and experience a spirit that harms their daughter Andrea. They finally call investigators who can help them get out of the mess.",
    },
    {
      image : img5,
      title :"Talk to me",
      description : "When a group of friends discover how to conjure spirits with an embalmed hand, they become hooked on the new thrill and high-stakes party game -- until one of them goes too far and unleashes terrifying supernatural forces",
    },
    {
      image : img6,
      title :"Smile 2",
      description : "About to embark on a new world tour, global pop sensation Skye Riley begins to experience increasingly terrifying and inexplicable events. Overwhelmed by the escalating horrors and pressures of fame, she must face her dark past to regain control of her life before it spirals out of control.",
    },
  ];
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Movie Cards</h2>
      <div className="row justify-content-center">
        {cardsData.map((movie, index) => (
          <Card key ={index} {...movie} />
          ))};
      </div>
    </div>
  );
};

export default App;
