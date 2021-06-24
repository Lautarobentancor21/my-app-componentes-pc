import React from 'react'
import Item from "../components/HowToFetchData"
import ItemCount from '../components/ItemCount';
import ItemList from '../components/ItemList'

function productos() {
    return (
        <div>
            <Item />
            < ItemCount / >
            <ItemList />
           
        </div>
    )
}

export default productos
