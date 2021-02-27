import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
const GiftExpertApp = props => {

    const [categories, setCategories] = useState(['Pokemon'])

    /*
    const addcategory = ()=>{
        
        let nueva = 'Dark';
        setCategories([...categories, nueva])
    }
*/
    return (
        <>
            <h2>GIFT EXPERT APP</h2>
            <hr />
            <AddCategory setCategories={setCategories} />
            <ol>
                {
                    categories.map(categoria=>{
                        return (<GifGrid 
                                    category={categoria}
                                    key={categoria}
                                />)
                    })
                }
            </ol>
        </>
    )
}


export default GiftExpertApp
