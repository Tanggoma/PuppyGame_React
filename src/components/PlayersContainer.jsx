import React from 'react'
import { Link } from 'react-router-dom'

const PlayersContainer = ({ filteredPlayers }) => {
    return (
        <div className="players-container">

            {/* Display the filtered players or players after delete */}
            {filteredPlayers.map((player) => (
                <Link id="player-card" to={`/players/${player.id}`} key={player.id}>
                    <img id="player-img" src={player.imageUrl} alt={player.name} style={{ width: '200px', borderRadius: '50%' }} />
                    <p id="player-name">{player.name}</p>
                </Link>
            ))}

        </div>
    )
}

export default PlayersContainer