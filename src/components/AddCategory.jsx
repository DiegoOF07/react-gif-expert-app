import { useState } from 'react'

export const AddCategory = ({onAddCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };
    // const sendDataInput = ({ keyCode }) => {
    //     if (keyCode === 13) {
    //         console.log('Enter')
    //     }
    //};
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length>=1) {onAddCategories(inputValue.trim())}
        setInputValue('')  
    };
    return (
        <form onSubmit={(e)=>{onSubmit(e)}}>
            <input
                type='text'
                placeholder='Busca tus GIFs'
                value={inputValue}
                onChange={onInputChange}>

            </input>
        </form>
    )
}

