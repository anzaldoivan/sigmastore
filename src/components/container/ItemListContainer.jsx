import {useEffect, useState} from 'react';
import { items as itemData } from "../data/items"
import ItemCard from "../ItemCard"

const ItemListContainer = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = new Promise( (resolve, reject) => {
      setTimeout( () => {
        resolve(itemData)
        reject('error en la promesa')
      }, 5000)
    })

    getItems.then((result) =>{
      console.log("Se completo la promesa", result);
      setItems(result)
    }).catch(error => {console.log('Error found', error)})

    console.log('effect end')
  }, [])

  return (
    <div>
      {console.log(itemData)}
      {itemData.map(item => <ItemCard key={item.id} itemData={item}/> )} 
    </div>
  )
}

export default ItemListContainer;
