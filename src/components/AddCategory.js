import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const cambiarValor = (e)=> {
        setInputValue( e.target.value)
    }

    const handleSumbit = (e)=>{
        e.preventDefault();
        setCategories(cat => [ inputValue,...cat]);
        setInputValue('')
    }

    return (
        <form onSubmit={handleSumbit}>
            <input 
                type='text' 
                value={inputValue}
                onChange={(e)=>{cambiarValor(e)}}
            />  
        </form>
    )
}

AddCategory.propTypes ={
    setCategories : PropTypes.func.isRequired
}

export default AddCategory;
