import BeybladeCard from "./BeybladeCard";

function BeybladeList({ beyblades }) {

  return (
    <ul className="beybladelist-beyblade-cards">
      {beyblades.map((beyblade) => {
        return (
          <BeybladeCard
            key={beyblade.id}
            beyblade={beyblade}
          />
        )
      })}
      
    </ul>
  )
}

export default BeybladeList