
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Logo from '../assets/slimtidetogether.png';
import Banner from '../assets/acknow.banner.png';

const Acknowledgements = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/routes/acknowledgements')
      .then(response => {
        if (response.data) {

          setSponsors(response.data);
          console.log('got the sponsors', sponsors)
        } else {
          console.log('no sponsors in data')
        }
      })
      .catch(error => {
        console.log('error: ', error)
      })
  }, [])


  return (
    <div className="body acknow">
      {/* Header Photo */}
      <div>
        <img
          src={Banner}
          className="img-fluid"
          width="100%"
          alt="reef"
        />
      </div>

      {/* Title */}
      <div className="container my-5 text-center customHeader">
        <h1 className="customHeader">Special Thanks</h1>
      </div>

      {/* Content - Special Thanks */}
      <div className="container my-5 lead">
        We wish to extend our sincerest thanks to our esteemed Ocean Ambassadors. With their generous support, we are
        charting a course towards a healthier, more vibrant marine ecosystem. Their dedication to preserving our oceans
        not only sustains the life within but also inspires countless others to follow suit. Together, we are forging a
        powerful alliance, uniting passion with purpose to safeguard our precious marine environments for generations to
        come. Thank you, Ocean Ambassadors, for your invaluable contribution to the preservation of our planet's greatest
        treasure.
      </div>

      <div className="container text-center">
        {sponsors && sponsors.map((sponsor) => (
          <h2>{sponsor.sponsorName}</h2>
        ))}
      </div>

      <div className="container my-5">
        We'd also like to thank award-winning underwater photographer Jack Israel for the use of his unmatched
        photography. Meet Jack by reading his interview with{" "}
        <a className="text-muted" href="https://www.scubadiving.com/meet-underwater-photographer-jack-israel">
          scubadiving.com
        </a>
        , and visit his{" "}
        <a className="text-muted" href="https://www.intothewater.net/">
          website
        </a>{" "}
        to see more of his work.
      </div>
      <div className="container my-5">
        Tide Together: Marine Life Sponsorship is dedicated to the dear memory of Jack's wife Diane.
      </div>
    </div>
  );
};

export default Acknowledgements;
