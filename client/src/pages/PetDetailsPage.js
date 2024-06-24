import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import { useAuthContext } from '../hooks/useAuthContext'; // Assuming this hook provides user info including token

const PetDetailsPage = ({ match }) => {
    // const { user } = useAuthContext(); // Fetch user from context
    // const { user } = true;
    const [pet, setPet] = useState(null);

    useEffect(() => {
        const fetchPet = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/routes/sponsor/${match.params.id}`);
                setPet(response.data);

            } catch (error) {
                console.error('Error fetching pet:', error);
            }
        };

        fetchPet(); 
    }, [match.params.id]); // Dependency on match.params.id and user

    if (!pet) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{`${pet.petName} the ${pet.petType}`}</h2>
            <img src={pet.picture} alt={pet.petType} />
            <p>{pet.desc}</p>
            <p><em>${pet.cost} per month</em></p>
            {/* Additional details or actions */}
        </div>
    );
};

export default PetDetailsPage;
