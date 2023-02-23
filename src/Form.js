import React, {useState} from 'react';


export default function Form (){

    const [name, setName] = useState("there");
    const [age, setAge] = useState("cool");
    const [city, setCity] = useState("somewhere");

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeAge(e) {
        setAge(e.target.value);
    }

    function handleChangeCity(e) {
        setCity(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                Name: <input type="text" value={name} onChange={handleChangeName} /><br/>
                Age: <input type="text" value={age} onChange={handleChangeAge} /><br/>
                City: <input type="text" value={city} onChange={handleChangeCity} /><br/>
            
                <p>Hi {"'"+name+"'"}, you are {"'"+age+"'"} and live in {"'"+city+"'"} </p>
            </form>
        </div>
    );
}