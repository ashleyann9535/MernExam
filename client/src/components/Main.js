import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Main = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pet")
      .then((res) => {
        console.log(res.data);
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between w-50 align-items-end mb-2">
        <h1>Pet Shelter</h1>
        <Link to={"/form"}>Add Pet</Link>
      </div>
      <h4>These pets are looking for a good home</h4>
      <table class="table table-striped w-50 table table-bordered mt-3">
        <thead>
          <tr>
            <th scope="col">Pet Name</th>
            <th scope="col">Type</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {list
            .sort((a, b) => {
              if (a.type < b.type) {
                return -1;
              }
              if (a.type > b.type) {
                return 1;
              }
              return 0;
            })
            .map((pet, index) => (
              <tr key={index}>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td>
                  <Link to={`/details/${pet._id}`}>details</Link>
                  <span> | </span>
                  <Link to={`/edit/${pet._id}`}>edit</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
