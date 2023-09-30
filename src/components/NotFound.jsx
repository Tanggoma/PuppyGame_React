import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <>

            <h2>Page Not Found</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, aliquam quae vitae eaque ipsam, tenetur suscipit at, placeat magni neque ullam accusamus incidunt iusto harum sed velit recusandae alias explicabo.</p>

            <p> Go to the <Link to="/home"> Homepage </Link></p>
        </>
    )
}

export default NotFound