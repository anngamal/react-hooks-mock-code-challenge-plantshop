import React , {useState} from "react";

function NewPlantForm({setPlants}) {
  const resetForm={
    'name':"",
    'image':'',
    'price':""
  }
  const[formData, setFormData]= useState({
    resetForm
  });
  function handleChange(event){
    setFormData(prev => {
      return{
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }
  function handleSubmit(event){
    event.preventDefault();
    fetch(" http://localhost:6001/plants",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    })
    .then(resp => resp.json())
            .then(data => {
                setPlants(prevPlants => [...prevPlants, data]);
            });
            setFormData(resetForm)
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange} value={formData.name}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} value={formData.image} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange} value={formData.price} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
