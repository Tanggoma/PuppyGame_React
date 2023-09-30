import bannerImg from '../assets/banner.png';

const Home = () => {
    return (
        <>
            <section className='home'>
                <img id='banner-img' src={bannerImg} alt="banner" />
                <h1 id='home-h1'> Welcome </h1>
                <p> <span style={{ fontStyle: 'italic' }}>Everyone’s favorite game is back in action! </span>   PUPPY BOWL is back with more ear pulls, tail tugs, sloppy kisses, and touchdowns you won't want to miss. Get ready to cheer on the puppy players of Team Ruff and Team Fluff as they give it their all.</p>

                <p> PUPPY BOWL celebrates adoptable pups in all their cuteness and showcases the incredible shelters and rescues, as well as their staffers, who dedicate their lives to helping animals find their fur-ever loving homes.</p>

                <p> There are 20 incredible adoptable puppy players out to sport their TEAM RUFF and TEAM FLUFF bandanas. Watch these players give it their all to chase, fetch, guard, heel, and sprint to the end zone.</p>

                <p>You will get to see these canines' devotion to the game as they put their tricks to the test to score touchdowns and a possible chase of the tail.
                </p>
            </section>
        </>


    )
}

export default Home


