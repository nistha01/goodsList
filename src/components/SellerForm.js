import React, { useState } from 'react';
import './SellarForm.css';
import Button from './Button';

const SellarForm = (props) => {
    const [entredName, setName] = useState("");
    const [entredQuantity, setQuantity] = useState(1); // Initialize quantity with 1 or any default value
    const [entredPrice, setPrice] = useState(0); // Initialize price with 0

    const setNameHandler = (event) => {
        setName(event.target.value);
    };
    const setQuantityHandler = (event) => {
        setQuantity(event.target.value);
    };
    const setPriceHandler = (event) => {
        setPrice(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Pass the values to the parent component
        props.onAddIteam(entredName, entredPrice, entredQuantity);

        // Optionally, clear the form after submission
        setName("");
        setQuantity(1);
        setPrice(0);
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="form-label">Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-input"
                    value={entredName}
                    onChange={setNameHandler}
                    required
                />
            </div>
            <div>
                <label htmlFor="price" className="form-label">Price:</label>
                <input 
                    type="number" 
                    id="price" 
                    name="price" 
                    className="form-input"
                    value={entredPrice}
                    onChange={setPriceHandler}
                    min="0" 
                    required
                />
            </div>
            <div>
                <label htmlFor="quantity" className="form-label">Quantity:</label>
                <input 
                    type="number" 
                    id="quantity" 
                    name="quantity" 
                    className="form-input"
                    value={entredQuantity}
                    onChange={setQuantityHandler}
                    min="1" 
                    required
                />
            </div>
            <Button type="submit">Add to Shop</Button>
        </form>
    );
};

export default SellarForm;
