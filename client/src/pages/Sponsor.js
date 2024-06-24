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

// import React, { useEffect, useState } from "react";
// import Banner from "../assets/sponsor.banner.png";
// import PetDetails from '../components/PetDetails';
// import axios from 'axios';
// import { useAuthContext } from '../hooks/useAuthContext';

// function Sponsor() {
//   const [petsOne, setPetsOne] = useState([]);
//   const [petsTwo, setPetsTwo] = useState([]);
//   const [petsThree, setPetsThree] = useState([]);
//   const { user } = useAuthContext();

//   useEffect(() => {
//     const fetchPets = async () => {
//       try {
//         // Fetching pets for tier one
//         const responseOne = await axios.get('http://localhost:4000/api/routes/sponsor/tierOne', {
//           headers: { 'Authorization': `Bearer ${user.token}` },
//         });
//         if (responseOne.data) {
//           setPetsOne(responseOne.data);
//         } else {
//           console.log('No pets in tier one');
//         }

//         // Fetching pets for tier two
//         const responseTwo = await axios.get('http://localhost:4000/api/routes/sponsor/tierTwo', {
//           headers: { 'Authorization': `Bearer ${user.token}` },
//         });
//         if (responseTwo.data) {
//           setPetsTwo(responseTwo.data);
//         } else {
//           console.log('No pets in tier two');
//         }

//         // Fetching pets for tier three
//         const responseThree = await axios.get('http://localhost:4000/api/routes/sponsor/tierThree', {
//           headers: { 'Authorization': `Bearer ${user.token}` },
//         }
//         );
        

//         if (responseThree.data) {
//           setPetsThree(responseThree.data);
//         } else {
//           console.log('No pets in tier three');
//         }
//       } catch (error) {
//         console.error('Error fetching pets:', error);
//       }
//     };

//     // if (user) {

//        fetchPets(); // Call the function once when component mounts
//     // }

    
//   }, []);

//   return (
//     <div>
//       {/* Header Photo */}
//       <div className="container-fluid">
//         <img
//           src={Banner}
//           className="img-fluid"
//           alt="reef"
//           width="100%"
//         />
//       </div>

//       {/* Title */}
//       <div className="container mt-5 text-center">
//         <h1 className="custom-header">Members Only</h1>
//       </div>

//       {/* Content */}

//       {/* Tier One */}
//       <div className="container" id="tierOne">
//         <h3 className="mt-5 mb-4 text-center">Tier One - Coral Crusader</h3>

//         {petsOne && petsOne.map((pet) => (
//           <PetDetails key={pet._id} pet={pet}/>
//         ))}

//         <hr className="my-5" />
//       </div>

//       {/* Tier Two */}
//       <div className="container" id="tierTwo">
//         <h3 className="mt-5 mb-4 text-center">Tier Two - Reef Rangers</h3>
//         <div className="row row-cols-1 row-cols-md-3 g-4">
//           {petsTwo.map((pet) => (
//             <div key={pet._id} className="col">
//               <PetDetails pet={pet} />
//             </div>
//           ))}
//         </div>
//         <hr className="my-5" />
//       </div>

//       {/* Tier Three */}
//       <div className="container" id="tierThree">
//         <h3 className="mt-5 mb-4 text-center">Tier Three - Ocean Ambassadors</h3>
//         <div className="row row-cols-1 row-cols-md-3 g-4">
//           {petsThree.map((pet) => (
//             <div key={pet._id} className="col">
//               <PetDetails pet={pet} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sponsor;

