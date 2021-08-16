import React, {useState} from 'react'
import PropTypes from 'prop-types'

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        value,
        onChange: event => setValue(event.target.value)
    }
}


function AddTodo({onCreate}) {
    const input = useInputValue('')


    function submitHandler(event) {
        event.preventDefault()

        if (input.value.trim()) {
            onCreate(input.value)
        }
    }

    return (
        <form style={{marginBottom:'1rem'}}  onSubmit={submitHandler}>
            <input {...input}/>
            <button type='submit'>Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo