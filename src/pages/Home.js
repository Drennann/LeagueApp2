import "./Home.css";
import {useNavigate} from "react-router-dom";

export default function Home() {

    let navigate = useNavigate();

    const onClickHandler = () => {
        navigate("../Play")
    }

        return(
                <div className="Home">
                        <button onClick={onClickHandler}>Play</button>
                </div>
        )
}