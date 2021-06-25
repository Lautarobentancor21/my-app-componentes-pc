import React from 'react'
import Fetch from "../components/HowToFetchData"
import ItemList from '../components/ItemList'
import Item from '../components/item'

function productos() {
    return (
        <div>
            <Fetch />
            <Item/>
            <ItemList />
        </div>
    )
}

export default productos
