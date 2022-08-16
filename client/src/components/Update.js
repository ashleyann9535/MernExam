import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useNavigate, Link} from 'react-router-dom';

const Update = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [skillOne, setSkillOne] = useState('');
    const [skillTwo, setSkillTwo] = useState('');
    const [skillThree, setSkillThree] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then((res) => {
                console.log(res.data);
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkillOne(res.data.skillOne);
                setSkillTwo(res.data.skillTwo);
                setSkillThree(res.data.skillThree);
            })
            .catch((err) => {
                console.log(err)
                
            })
    }, [])

    const updateHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pet/${id}`, {name, type, description, skillOne, skillTwo, skillThree})
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err.response.data.error)
                setErrors(err.response.data.error)
            })
    }


  return (
    <div>
        <div className="d-flex justify-content-between w-50 align-items-end">
        <h1>Pet Shelter</h1>
        <Link to={"/"}>Home</Link>
      </div>
        <h4>Edit {name} </h4>
        <form onSubmit={updateHandler} className="d-flex w-50 border border-secondary rounded">
            <div className="m-3">
            <label className="d-block m-2">Name:</label>
            {errors.name && <p>{errors.name.message}</p>}
                <input type='text' value={name} onChange={e => setName(e.target.value)} className="m-2"/>
            
            <label className="d-block m-2">Type:</label>
            {errors.type && <p>{errors.type.message}</p>}
                <input type='text' value={type} onChange={e => setType(e.target.value)} className="m-2"/>
            
            <label className="d-block m-2">Description: </label>
            {errors.description && <p>{errors.description.message}</p>}
                <textarea rows="4" cols="25" value={description} onChange={e => setDescription(e.target.value)} className="m-2"> </textarea>
            
            <input type="submit" className="d-block bg-primary text-white" value={'Edit Pet'}/>
            </div>
            <div className="m-3">
            <label>Skills (optional)</label>
            <label className="d-block m-2">Skill 1: </label>
                <input type='text' value={skillOne} onChange={e => setSkillOne(e.target.value)} className="m-2"/>
            
            <label className="d-block m-2">Skill 2:</label>
                <input type='text' value={skillTwo} onChange={e => setSkillTwo(e.target.value)} className="m-2"/>
            
            <label className="d-block m-2">Skill 3: </label>
                <input type='text' value={skillThree} onChange={e => setSkillThree(e.target.value)} className="m-2"/>
            
            </div>
            
        </form>
    </div>
  )
}

export default Update