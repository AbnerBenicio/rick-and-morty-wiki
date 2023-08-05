import ErrorImg from "../assets/img/ErrorImg.png"
import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <div className="Error">
            <h1>ERROR</h1>
            <div className="type-err">
                <h1>4</h1>
                <img src={ErrorImg}/>
                <h1>4</h1>
            </div>
            <p>Page not found. Press the button to back to home!</p>
            <Link to="/">Back to Home</Link>
        </div>
    )
}

export default ErrorPage