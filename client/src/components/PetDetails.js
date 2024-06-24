// PetDetails.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PetDetails = ({ pet }) => {
    return (
        <div className="row gx-5 product">
            <div className="col-lg pb-4">
                <h5>{`${pet.petName} the ${pet.petType}`}</h5>
                <img width="550px" src={pet.picture} alt={pet.petType} />
            </div>
            <div className="col-md d-flex align-items-center">
                <br />
                <span>
                    <p className="customBorder">{pet.desc}</p>
                    <p><em className="text-muted">${pet.cost} per month</em></p>
                    <Link to={`/${pet._id}`} className="btn">View {pet.petName}</Link>
                </span>
            </div>
        </div>
    );
};

export default PetDetails;
