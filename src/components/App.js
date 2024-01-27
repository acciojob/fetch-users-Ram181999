
import React,{useEffect,useState} from "react";
import './../styles/App.css';
import "regenerator-runtime/runtime";


const App = () => {

  const [people,setPeople]=useState([]);
  const getUsers=async()=>{
const res = await fetch("https://reqres.in/api/users");
const response =await res.json()
console.log(response.data)
setPeople(response.data)
  }

//   useEffect(()=>{

// getUsers()

//   },[])
  return (
    <div>
      <header className="nav">
        <h1>Blue Whales</h1>
        <button className="btn" onClick={getUsers}>
          Get User List
        </button>
      </header>
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {people.length === 0 ? (
            <tr>
              <td>
                <b>No data found to display.</b>
              </td>
            </tr>
          ) : (
            people.map((person, idx) => {
              return (
                <tr key={idx}>
                  <td>{person.first_name}</td>
                  <td>{person.last_name}</td>
                  <td>{person.email}</td>
                  <td>
                    <img src={person.avatar}></img>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App
