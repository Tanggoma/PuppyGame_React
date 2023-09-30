import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPlayerForm = () => {

    const navigate = useNavigate();

    //declare state for form controlled inputs& required field
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [status, setStatus] = useState('field');
    const [imageUrl, setImageUrl] = useState('');
    const [teamId, setTeamId] = useState(1);
    const [showRedBoarder, setShowRedBoarder] = useState(false);


    //submit event
    const handleSubmit = async (e) => {

        e.preventDefault()

        // check input value if they are all filled in and if the image url is valid using regex

        if (!name || !breed || !status || !imageUrl || !teamId) {
            alert("Please fill in all information.");
            setShowRedBoarder(true);
            return
        } else if (!/^https?:\/\/(?:[a-z]+\.)?[a-z0-9-]+\.[a-z]{2,}(?:\/[^/]+)*\/[^/]+\.(?:jpe?g|png)$/i.test(imageUrl)) {
            alert("Please enter a valid URL. Only JPEG and PNG files are accepted.");
            return
        }
        //create new puppy object
        const newPuppy = { name, breed, status, imageUrl, teamId }

        //fetch new puppy using POST method
        try {

            const response = await fetch('https://json-server-heroku-hosting-66e1a2ea64aa.herokuapp.com/puppy',
                {
                    method: 'POST',
                    body: JSON.stringify(newPuppy),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            const newPup = await response.json();
            console.log(newPup);

        } catch (err) {
            console.error('Oops, something went wrong with adding that player!', err);
        }

        alert('new puppy added!')
        navigate('/players');

    }

    //cancel event
    const handleCancel = () => {
        navigate('/home');
    }

    return (
        <div id='form-container'>
            <section style={{ textAlign: 'center', fontSize: '1.5rem' }}>
                <span style={{ fontSize: '2rem', color: 'orange', textShadow: '0 4px 8px 0' }}>Welcome to the Puppy Creation Center!</span>
                <br />Here, you can design your own adorable pups! Use the form below to customize the name, breed, status, image, and team for each furry friend. Simply fill in the details and click the "Create" button to bring your new pup to life. Don't worry; you can always click "Cancel" if you change your mind. Have fun creating your unique and lovable pups! </section>

            {/* FORM */}
            <form id="new-player-form" style={{ margin: '2rem' }}>
                <h2 style={{ textAlign: 'center', fontSize: '1.8rem', textDecoration: 'underline' }}> Create Form </h2>

                <label>Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={showRedBoarder && !name ? 'required' : ''}
                />

                <br></br>

                <label>Breed:</label>
                <input
                    type="text"
                    id="breed"
                    name="breed"
                    placeholder="Enter breed"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    className={showRedBoarder && !breed ? 'required' : ''}

                /><br />

                <label>Status:</label>

                <select
                    id="status"
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className={showRedBoarder && !status ? 'required' : ''}
                >
                    <option value="field">Field</option>
                    <option value="bench">Bench</option>
                </select>

                <br />

                <label>Image URL:</label>
                <input
                    type="url"
                    id="img"
                    name="img"
                    placeholder="Enter image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className={showRedBoarder && !imageUrl ? 'required' : ''}
                />
                <br />

                <label>Team:</label>
                <select
                    id="team"
                    name="team"
                    value={teamId}
                    onChange={(e) => setTeamId(e.target.value)}
                    className={showRedBoarder && !teamId ? 'required' : ''}
                >
                    <option value={1}>Ruff</option>
                    <option value={2}>Fluff</option>
                </select><br />

                <button
                    type="submit"
                    id="submit-button"
                    onClick={handleSubmit}
                >
                    Create</button>
                <button
                    type="button"
                    id="cancel-button"
                    onClick={handleCancel}
                >Cancel</button>
            </form>
        </div>
    )
}

export default NewPlayerForm