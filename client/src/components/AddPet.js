import React from 'react';
import PetForm from '../components/PetForm';

function AddPet() {
    return (
        <div className="body">
            <div>
                <img src={Banner} className="img-fluid" width="100%" alt="reef" />
            </div>
            <PetForm />
        </div>
    )
}

export default AddPet