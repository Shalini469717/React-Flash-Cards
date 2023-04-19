import {useEffect, useState} from 'react'
import Flashcard from './Flashcard'
import {useForm} from 'react-hook-form'
import './Cards.css'
function Cards(){

    let [cards,setCards] = useState([])

    let { register, handleSubmit, formState: { errors } } = useForm();
    
    let submitForm = (data) =>{
        //make request
        fetch("http://localhost:5000/cards", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
        .then(res=> res.json())
        .then(cardObj => console.log(cardObj))
        .catch(err=>console.log(err))
    }

    useEffect(() =>{
        fetch("http://localhost:5000/cards")
        .then(res => res.json())
        .then(cardObj => setCards(cardObj))
    })

    return(
        <div className='text-center'>
            <h2>React Sessions</h2>
            <form onSubmit={handleSubmit(submitForm)} className='col-lg-4 col-md-6 col-sm-10 mx-auto border p-5 rounded'>
                <div className="mb-3">
                    <input {...register("Title")} type="text" className="form-control" id="Topic" placeholder='Topic Name'></input>
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Summary of the Topic</label>
                    <textarea {...register("Content")} type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter Summary' required></textarea>
                </div>
                <div class="mb-3">
                    <input {...register("Url")} type="text" className="form-control" id="link" placeholder='Add video/file/website links'></input>
                </div>
                
                <div class="mb-3">
                    <label htmlFor="exampleColorInput" className="form-label">Pick Color based on the Difficulty of topic
                        <input {...register("Color")}type="color" list="presets" className='mt-3'></input></label>
                    <datalist id="presets">
                        <option value="#DAFFD5">Grey</option>
                        <option value="#FAFB92">Yellow</option>
                        <option value="#FA6B84">Blue</option>
                    </datalist>
                </div>
                
                <button type="submit" className="btn btn-primary">Add Topic</button>
            </form>
            <div className='cards mt-5'>
                {
                    cards.map((card) => (
                        <Flashcard data={card} />
                    ))
                }
            </div>
            
            
        </div>
    )
}
export default Cards