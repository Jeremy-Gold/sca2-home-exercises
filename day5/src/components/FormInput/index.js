import React from "react"
import { Input, Title } from "./styles"

// TODO: Create a FormInput component that used the styled component Input
// and whatever extra labels or text-based components and containers you wish!
const FormInput = ({ title, update, value, type}) => {
    return (
        <React.Fragment>
            <Title>{title}</Title>
            <Input 
                type = {type}
                value = {value}
                onChange = {event => update(event.target.value)}
            />
        </React.Fragment>
    )
    
}

export default FormInput
