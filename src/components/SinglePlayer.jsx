import { useLoaderData, useParams, useNavigate } from 'react-router-dom'

const SinglePlayer = () => {

    const { id } = useParams();
    const player = useLoaderData();
    const navigate = useNavigate();


    const handleBackButton = () => {
        navigate('/players')
    }

    const handleDelete = async () => {

        const confirmed = window.confirm('Confirm if you want to delete');
        if (!confirmed) {
            return;
        }
        try {
            await fetch(`https://json-server-heroku-hosting-66e1a2ea64aa.herokuapp.com/puppy/${id}`, {
                method: 'DELETE',
            });
            navigate('/players');
        } catch (error) {
            console.error('Failed to delete the player:', error);
        }
    };


    return (
        <div className='main-single'>

            <div className='player-details'>

                <h2> {player.name} </h2>
                <img src={player.imageUrl} alt="" />
                <p id='single-detail'> <span style={{ color: 'rgba(228, 144, 84, 0.848', fontWeight: 'bold' }}> Breed: </span> {player.breed}</p>
                <p id='single-detail'> <span style={{ color: 'rgba(228, 144, 84, 0.848', fontWeight: 'bold' }}>Status:</span> {player.status} </p>
                <div className='button-container'>
                    <button className='back-button' onClick={handleBackButton}> Back </button>
                    <button className='delete-button' onClick={handleDelete}> Delete</button>
                </div>

            </div>
        </div>
    )
}

// loader function

export const playerDetailsLoader = async ({ params }) => {

    const { id } = params

    const response = await fetch('https://json-server-heroku-hosting-66e1a2ea64aa.herokuapp.com/puppy/' + id)
    const data = await response.json()



    // return response.json();
    return data;
}

export default SinglePlayer