import "../pages/Play.css";

export default function UserText ({setChampionGuessed, championSelected, setChampionSelected}){

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(e.target[0].value.toLowerCase() === championSelected.toLowerCase()){
            setChampionGuessed(championSelected);
        }
    }

    return(
        <>
            <form onSubmit={onSubmitHandler}>
                <input type="text"></input>
                <button>Aceptar</button>
            </form>
        </>
    )
}