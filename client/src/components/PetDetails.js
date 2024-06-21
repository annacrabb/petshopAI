const PetDetails = ({ pet }) => {
    return (
        <div className="petdeets">
            <h4>{pet.petName}</h4>
            <p>{pet.petType}</p>
            <p>{pet.picture}</p>
            <p>{pet.desc}</p>
            <p>{pet.cost}</p>
        </div>
    )

}

export default PetDetails