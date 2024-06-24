import React, { useEffect, useState } from "react";
import Banner from "../assets/sponsor.banner.png";
import PetDetails from '../components/PetDetails';
import axios from 'axios';
import { useAuthContext } from '../hooks/useAuthContext';

function Sponsor() {
  const [petsOne, setPetsOne] = useState(null);
  const [petsTwo, setPetsTwo] = useState(null);
  const [petsThree, setPetsThree] = useState(null);
  const {user} = useAuthContext();

  useEffect(() => {
    axios.get('http://localhost:4000/api/routes/sponsor/tierOne')
        .then(response => {
          if (response.data) {
            setPetsOne(response.data);
          } else {
            console.log('no pets in tier one')
          }
        })
        .catch(error => {
          console.log('error:', error)
        })

    axios.get('http://localhost:4000/api/routes/sponsor/tierTwo')
        .then(response => {
          if (response.data) {
            setPetsTwo(response.data);
          } else {
            console.log('no pets in tier two')
          }
        })
        .catch(error => {
          console.log('error:', error)
        })

    axios.get('http://localhost:4000/api/routes/sponsor/tierThree')
        .then(response => {
          if (response.data) {
            setPetsThree(response.data);
          } else {
            console.log('no pets in tier three')
          }
        })
        .catch(error => {
          console.log('error:', error)
        })
  }, [])

  useEffect(() => {
    const fetchPet = async () => {
        const response = await fetch('api/routes/sponsor/tierOne', {
            headers: {'Authorization': `Bearer ${user.token}`},
        })
        const json = await response.json()

    }
    if(user) {
        fetchPet()
    }
}, [user])

  return (
    <div className="body">
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
        <h1 className="customHeader">Members Only</h1>
      </div>

      {/* Content */}

      {/* Tier One */}
      <div className="container" id="tierOne">
        <h3 className="m-5">Tier One - Coral Crusader</h3>
      </div>
      <div className="container text-center pets">  
        {petsOne && petsOne.map((pet) => (
          <PetDetails key={pet._id} pet={pet}/>
        ))}
      <hr />
      </div>

      {/* Tier Two */}
      <div className="container" id="tierTwo">
        <h3 className="m-5">Tier Two - Reef Rangers</h3>
      </div>
      <div className="container text-center">
        {petsTwo && petsTwo.map((pet) => (
          <PetDetails key={pet._id} pet={pet} />
        ))}
      <hr />
      </div>

      {/* Tier Three */}
      <div className="container" id="tierThree">
        <h3 className="m-5">Tier Three - Ocean Ambassadors</h3>
      </div>
      <div className="container text-center">
        {petsThree && petsThree.map((pet) => (
          <PetDetails key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default Sponsor;
