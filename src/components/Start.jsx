import { useNavigate } from "react-router-dom";
import mainImg from '../assets/starter.jpg';

const Start = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home')
    }
    return (
        <div className="start-page" >
            <h1 className="text_h1">Puppy Bowl Game</h1>
            <div className="picture-container">
                <img id="main-img" src={mainImg} alt="main" />
                <button
                    id="start-button"
                    onClick={handleClick}> Start
                </button>
            </div>
            <footer> @tanggoma </footer>
        </div>
    )
}

export default Start