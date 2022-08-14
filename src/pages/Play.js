import { useState } from "react";
import UserText from "../components/UserText"
import FetchChampionData from "../components/FetchChampionData";
import "./Play.css";

export default function Play () {

    let [championSelected, setChampionSelected] = useState("");
    let [championGuessed, setChampionGuessed] = useState("");

    return(
        <>
            <div className="container">
                <div className="Main">
                    <FetchChampionData setChampionSelected={setChampionSelected} championGuessed={championGuessed} setChampionGuessed={setChampionGuessed}/>
                    <UserText setChampionSelected ={setChampionSelected}setChampionGuessed={setChampionGuessed} championSelected={championSelected}/>
                </div>
            </div>
        </>
    )
}