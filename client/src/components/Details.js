import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [petId, setPetId] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skillOne, setSkillOne] = useState("");
  const [skillTwo, setSkillTwo] = useState("");
  const [skillThree, setSkillThree] = useState("");
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

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pet/${id}`)
      .then((res) => {
        console.log(res.data);
        setPetId(res.data._id);
        setName(res.data.name);
        setType(res.data.type);
        setDescription(res.data.description);
        setSkillOne(res.data.skillOne);
        setSkillTwo(res.data.skillTwo);
        setSkillThree(res.data.skillThree);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8000/api/pet/${id}`)
      .then((res) => {
        const newList = list.filter((pet) => {
          return pet._id !== id;
        });
        setList(newList);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="d-flex justify-content-between w-50 align-items-end mb-2">
        <h1>Pet Shelter</h1>
        <Link to={"/"}>Home</Link>
      </div>
      <div className="d-flex justify-content-between w-50">
        <h4>Details about: {name} </h4>
        <button onClick={() => deleteHandler(petId)} className="btn btn-danger">
          Adopt {name}
        </button>
      </div>
      <div className=" d-flex w-50 border border-secondary rounded mt-2 p-2">
        <div className="margin_right">
          <p>Type:</p>
          <p>Description:</p>
          <p>Skills:</p>
        </div>
        <div>
          <p>{type}</p>
          <p>{description}</p>
          <ul>
            <li>{skillOne}</li>
            <li>{skillTwo}</li>
            <li>{skillThree}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
