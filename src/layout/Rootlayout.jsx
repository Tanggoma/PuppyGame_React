import { NavLink, Outlet, useNavigate } from "react-router-dom"
import logo from '../assets/logo.png';


const images = [
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];


const Rootlayout = () => {


    const navigate = useNavigate();

    return (
        <div className='root-layout'>
            <header>
                <nav className="navbar">
                    <div className="logo-container">
                        <img
                            id="logo-img"
                            src={logo}
                            alt="logo"
                            onClick={() => navigate('/')} />
                    </div>

                    <div className="nav-links">
                        <NavLink to="home"> Home</NavLink>
                        <NavLink to="players"> Players</NavLink>
                        <NavLink to="create"> Create new player</NavLink>
                    </div>
                </nav>
            </header>

            <main>
                <Outlet />
                <Carousel images={images} />
            </main>

        </div>
    )
}

export default Rootlayout