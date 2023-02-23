import React, {useState} from 'react';


export default function Form (){

    // For stocking the values
    const [name, setName] = useState("there");
    const [age, setAge] = useState("cool");
    const [city, setCity] = useState("somewhere");

    // For updating the values
    const [name1, setName1] = useState("there");
    const [age1, setAge1] = useState("cool");
    const [city1, setCity1] = useState("somewhere");

    // To recuperate values
    function handleChangeName(e) {
        setName(e.target.value);
    }
    function handleChangeAge(e) {
        setAge(e.target.value);
    }
    function handleChangeCity(e) {
        setCity(e.target.value);
    }

    // To stock the values recuperated
    function handleSubmit(e) {
        setName1(name);
        setAge1(age);
        setCity1(city);
        e.preventDefault();
    }

    // Rendering
    return (
        <div>
            <form onSubmit={handleSubmit} >
                Name: <input type="text" value={name} onChange={handleChangeName} /><br/>
                Age: <input type="text" value={age} onChange={handleChangeAge} /><br/>
                City: <input type="text" value={city} onChange={handleChangeCity} /><br/>
                        <input type="submit" onSubmit={handleSubmit} />
                <p>Hi {"'"+name1+"'"}, you are {"'"+age1+"'"} and live in {"'"+city1+"'"} </p>
            </form>
        </div>
    );
}