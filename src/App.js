import React, { useState } from 'react';
import SellerForm from './components/SellerForm';
import IteamList from './components/IteamList';

function App() {
    const [goodsList, setGoodsList] = useState([]);

    // Handler to add an item
    const addItemHandler = (iName, iPrice, iQuantity) => {
        setGoodsList((previousList) => [
            ...previousList, { name: iName, price: iPrice, quantity: iQuantity },
        ]);
    };

    // Handler to delete an item based on its index
    const deleteItemHandler = (index) => {
        setGoodsList((previousList) => 
            previousList.filter((item, i) => i !== index)
        );
    };

    // Handler to subtract the entered quantity from the current quantity at a specific index
    const updateQuantityHandler = (index, subtractQuantity) => {
        setGoodsList((previousList) =>
            previousList.map((item, i) => {
                if (i === index) {
                    // Ensure the quantity doesn't go below 0
                    const newQuantity = Math.max(item.quantity - subtractQuantity, 0);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            })
        );
    };

    return (
        <>
            <SellerForm onAddIteam={addItemHandler} />
            <IteamList 
                goods={goodsList} 
                onDeleteItem={deleteItemHandler} 
                onUpdateQuantity={updateQuantityHandler}  // Pass the update handler
            />
        </>
    );
}

export default App;
