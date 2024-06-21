import React, { useEffect, useState } from "react";
import Banner from "../assets/sponsor.banner.png";
import PetDetails from '../components/PetDetails';
import axios from 'axios';

function Sponsor() {
  const [pets, setPets] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/api/routes/sponsor')
    .then(response => {
      if (response.data && response.data.pets) {
        setPets(response.data.pets);
        console.log('got the pets', pets)
      } else {
        console.log('no pets in data')
      }
    })
    .catch(error => {
      console.log('error: ', error);
    });
  }, [])

  return (
    <div>
      {/* Header Photo */}
      <div className="img-fluid">
        <img
          src={Banner}
          width="100%"
          alt="reef"
        />
      </div>

      {/* Title */}
      <div className="container m-5 text-center">
        <h1 className="customHeader">Sponsor</h1>
      </div>

      {/* Content */}

      {/* Tier One */}
      <div className="container" id="tierOne">
        <h3 className="m-5">Tier One - Coral Crusader</h3>
      </div>
      <div className="container pb-4">
        <p className="lead">
          At only $10 per month, our most affordable tier offers scuba divers
          and other ocean enthusiasts a chance to keep up to date on what
          we're doing at Tide Together, and provides digital ways to show off
          their support. Our Coral Crusaders will receive the following:
        </p>
        <ul>
          <li>
            Customized Certificate:{" "}
            <em className="text-muted">
              Personalized certificate of sponsorship featuring the sponsored
              sea creature's name and photo.
            </em>
          </li>
          <li>
            Adopted Animal Profile:{" "}
            <em className="text-muted">
              A detailed profile of the sponsored sea creature, including its
              species information, habitat, and conservation status.
            </em>
          </li>
          <li>
            Monthly Newsletter:{" "}
            <em className="text-muted">
              Subscription to a monthly newsletter with updates on marine
              conservation news, success stories, and upcoming events.
            </em>
          </li>
        </ul>
      </div>
      <div className="container text-center pets">
        {pets ? <p>{pets.petType}</p> : <p>Loading...</p>}
  
        {pets && pets.map((pet) => (
        <PetDetails key={pet._id} pet={pet}/>))}
      <hr />
      </div>

      {/* Tier Two */}
      <div className="container" id="tierTwo">
        <h3 className="m-5">Tier Two - Reef Rangers</h3>
      </div>
      <div className="container pb-4">
        <p className="lead">
          Our Tier Two option includes all the perks from Tier One, as well as
          a way to physically display your support! Our Reef Rangers will
          receive all of the perks from Tier One AND the following:
        </p>
        <ul>
          <li>
            Merchandise:{" "}
            <em className="text-muted">
              {" "}
              Branded merchandise - choose between a t-shirt and a bucket hat
              - featuring the "Tied Together" crab logo.
            </em>
          </li>
          <li>
            Educational Materials:{" "}
            <em className="text-muted">
              Access to educational materials such as e-books, documentaries,
              and infographics about marine life and conservation.
            </em>{" "}
          </li>
          <li>
            Photo Book:{" "}
            <em className="text-muted">
              {" "}
              A printed photo book featuring stunning images of marine life
              and conservation efforts, with a special section dedicated to
              sponsored sea creatures.
            </em>
          </li>
        </ul>
      </div>
      <div className="container text-center">
        <div id="marketTwo"></div>
        <hr />
      </div>

      {/* Tier Three */}
      <div className="container" id="tierThree">
        <h3 className="m-5">Tier Three - Ocean Ambassadors</h3>
      </div>
      <div className="container pb-4">
        <p className="lead">
          Our Ocean Ambassadors at Tier Three will be able to interact with
          their At $100 per month, our valued Ocean Ambassadors will receive
          all of the perks from Tier One, Tier Two AND the following:
        </p>
        <ul>
          <li>
            Virtual Dive Experience:{" "}
            <em className="text-muted">
              Access to virtual reality or 360-degree videos showcasing the
              habitats of the sponsored sea creature.
            </em>
          </li>
          <li>
            VIP Events:{" "}
            <em className="text-muted">
              Invitation to exclusive events such as virtual Q&A sessions with
              marine biologists or behind-the-scenes tours of conservation
              facilities.
            </em>
          </li>
          <li>
            Name on Website:{" "}
            <em className="text-muted">
              Recognition on the website as a sponsor, with the option to
              include a personal message or dedication.
            </em>
          </li>
        </ul>
        <p>
          Check out our current Ocean Ambassadors{" "}
          <a href="acknowledgements.html">here</a>!
        </p>
      </div>
      <div className="container text-center">
        <div id="marketThree"></div>
      </div>
    </div>
  );
}

export default Sponsor;
