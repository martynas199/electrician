import React from "react";
import "./SimpleCard.scss";
import styled from  "styled-components";
import emergencyElectrician from "../../images/emergency-electrician.jpg";
import imgt from "../../images/repair-150x150.png";
import inspec from "../../images/inspection.jpg";

export default ({
  cards = [
    {
      imageSrc: emergencyElectrician,
      title: "Emergency Electrical Services",
      description: "On hand to help with almost any electrical emergency in the west, north west, north and central London area.",
      url: "https://timerse.com"
    },
    {
      imageSrc: imgt,
      title: "Appliance Installation & Repair",
      description: "Highly experienced in a wide array of electrical appliance repairs and installations, covering both domestic and commercial jobs.",
      url: "https://google.com"
    },
    {
      imageSrc: inspec,
      title: "Electrical Inspections and Testing",
      description: "We can assist with regular electrical testing and inspections on those electrical appliances we all use day in, day out.",
      url: "https://reddit.com"
    },
    {
      imageSrc: imgt,
      title: "Electrical Rewiring Services",
      description: "To meet modern safety standards, electrical rewiring is essential if your property is over 25 years old and has never been rewired.",
      url: "https://timerse.com"
    },
    {
      imageSrc: imgt,
      title: "Light Fitting & Repairing Services",
      description: "If you’re in need of any light fitting or repairing, be that in your home, business or outdoors, speak to Emergency Electrician Camden.",
      url: "https://google.com"
    },
    {
      imageSrc: imgt,
      title: "PAT Testing",
      description: "At Emergency Electrician Camden, all our electricians are fully qualified, NICEIC-approved and experienced in carrying out full PAT tests.",
      url: "https://reddit.com"
    },
    
  ],
  linkText = "Learn More",
  heading = "",
  subheading = "",
  description = "",
  imageContainerCss = null,
  imageCss = null
}) => {
  /*
   * This componets accepts a prop - `cards` which is an array of object denoting the cards. Each object in the cards array can have the following keys (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  4) url - the url that the card should goto on click
   */
  return (
    <div className="content-wrapper">
          {cards.map((card, i) => (
  
  <div class="news-card">
    <a href="#" class="news-card__card-link"></a>
    <img src={ card.imageSrc } alt="" class="news-card__image" />
    <div class="news-card__text-wrapper">
      <h2 class="news-card__title">{card.title}</h2>
      <div class="news-card__post-date">Jan 29, 2018</div>
      <div class="news-card__details-wrapper">
          <p class="news-card__excerpt">{ card.description }</p>
        <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>
          ))}

</div>
  );
};
