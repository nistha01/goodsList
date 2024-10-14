import React,{useState} from "react";
import Button from "./Button";

const IteamList = (props) => {
    const [subtractQuantity,setSubtractQuantity]=useState(0);

    const editHandler = (event) => {
        event.preventDefault();
        setSubtractQuantity(event.target.value);
        
    };

    const deleteHandler = (event, index) => {
        event.preventDefault();
        props.onDeleteItem(index);
    };

    const quantityChangeHandler = (event, index) => {
        //const subtractQuantity = Number(event.target.value); // Get the quantity to subtract
        props.onUpdateQuantity(index, subtractQuantity); // Trigger update with index and quantity to subtract
    };

    const goodsList = props.goods || [];

    return (
        <ul>
            {goodsList.map((item, index) => (
                <li key={index}>
                    Name: {item.name} | Price: {item.price} | Quantity: {item.quantity}
                    <input 
                        type="number" 
                        min='0' 
                        placeholder="Enter quantity to subtract" 
                        value={subtractQuantity}
                        onChange={editHandler} 
                    />
                    <Button type="button" onClick={(event) => quantityChangeHandler(event, index)}>Edit</Button>
                    <Button type="button" onClick={(event) => deleteHandler(event, index)}>Delete</Button>
                </li>
            ))}
        </ul>
    );
};

export default IteamList;
