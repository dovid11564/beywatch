

function BeybladeCard({ beyblade }) {

    return (
        // this component returns a plantsy like page where 
        // users can browse cards and click on them for more info
        <li className="card">
            <img src={beyblade.image} alt={`${beyblade.name}`}/>
            <h4>{beyblade.name}</h4>
            <p>{beyblade.price}</p>

        </li>
    )
}

export default BeybladeCard