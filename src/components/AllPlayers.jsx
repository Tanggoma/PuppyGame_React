import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PlayersContainer from "./PlayersContainer";

const AllPlayers = () => {

    const players = useLoaderData();


    const [search, setSearch] = useState('');
    const [selectedTeam, setSelectedTeam] = useState('all');

    const filteredPlayers = players.filter((player) => {

        const nameMatches = player.name.toLowerCase().includes(search.toLowerCase());
        const teamMatches = selectedTeam === 'all' || player.teamId == Number(selectedTeam);
        return nameMatches && teamMatches;
    });

    const handleTeam = (e) => {
        setSelectedTeam(e.target.value);
    }

    return (
        <div className="allplayers-container">

            <p style={{ fontSize: '2.5rem', textAlign: 'center', margin: '5rem' }}> Embark on an adventure with the adorable Puppy Squad, consisting of <span style={{ fontStyle: 'italic', color: 'orange' }}> {players.length} lovable pups </span>! Click on each furry friend to uncover their unique details and characteristics</p>

            <form className='team-filter-form'
                onSubmit={(e) => e.preventDefault()}>
                <select
                    id="team-filter"
                    name="team"
                    value={selectedTeam}
                    onChange={handleTeam}

                >
                    <option value='all'>All Players</option>
                    <option value={1}>Ruff</option>
                    <option value={2}>Fluff</option>
                </select><br />
            </form>

            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <input
                    id="search"
                    role="searchbox"
                    type="text"
                    placeholder=" 🔍  Search name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>

            <div className="players-container">
                {/* Display the filtered players */}
                <PlayersContainer
                    filteredPlayers={filteredPlayers}
                />
            </div>
        </div >
    );

}

// loader function
export const playersLoader = async () => {

    const response = await fetch('https://json-server-heroku-hosting-66e1a2ea64aa.herokuapp.com/puppy');


    const data = await response.json();

    return data;
}

export default AllPlayers