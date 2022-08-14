import { useEffect, useState } from "react";
import "../pages/Play.css";

export default function FetchChampionData({setChampionSelected, championGuessed}) {

    let [description, setDescription] = useState("");
    let [spell, setSpell] = useState("");

    useEffect(()=>{
        (async ()=>{
            let data = await fetch("https://ddragon.leagueoflegends.com/cdn/12.15.1/data/es_MX/champion.json");
            data = await data.json();
            let championsNameList = Object.keys(data.data);
            let championRandom = Object.keys(data.data)[Math.floor(Math.random()*championsNameList.length)];
            let championRandomData = await fetch(`https://ddragon.leagueoflegends.com/cdn/12.15.1/data/es_MX/champion/${championRandom}.json`);
            championRandomData = (await championRandomData.json()).data[championRandom];
            setSpell(championRandomData.spells[Math.floor(Math.random()*4)].id)
            setDescription(championRandomData.title);
            setChampionSelected(championRandomData.name);
            console.log(championRandomData.id)
        })()
    }
    ,[championGuessed]);


    return(

        <div className="imagen">
            {description? <img src={`https://ddragon.leagueoflegends.com/cdn/12.15.1/img/spell/${spell}.png`} alt="spell" width={150} height={150}/> : <p>Loading...</p>}
        </div>

    )
}