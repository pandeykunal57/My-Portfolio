import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">KUNAL PANDEY </span>
            from <span className="purple"> Delhi, India.</span>
            <br /> <br/>
            I am currently a <span className="purple">Final Year Student of B.Tech, Computer Science</span>
            <br /><br/>   
            I am Pursuing my B.Tech From <span className="purple">HMRITM ( affilated to GGSIPU ) </span> 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching and Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

         
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
