import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import axios from 'axios'

import PetDetails from '../components/PetDetails';

const SponsorLanding = () => {
    const [pet, setPet] = useState(null);
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    useEffect(() => {
        axios.get('http://localhost:4000/api/routes/sponsor/tierOne')
        .then(response => {
            if(response.data) {
                setPet(response.data);
                console.log('got pet', pet)
            } else {
                console.log('not got pet')
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
            <div className="container">
                Sponsor Page
            </div>

            {user && (
                <div>
                    <span>You are logged in</span>
                    {pet && pet.map((pet) => (
                        <PetDetails key={pet._id} pet={pet}/>))}
                    <button onClick={handleClick}>Log out</button>
                </div>
            )}
            {!user && (
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>
            )}
        </div>
    )
}

export default SponsorLanding