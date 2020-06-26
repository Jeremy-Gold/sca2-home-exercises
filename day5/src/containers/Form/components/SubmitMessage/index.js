import React from "react"

const SubmitMessage = ({ name, pronoun, hometown, birthday, threeFavFoods }) => {
    return(
        <React.Fragment>
            User's name is {name}, and they are from {hometown}. {pronoun} was born on {birthday.getMonth}/{birthday.getDay}/{birthday.getFullYear}, and their favorite foods are {threeFavFoods[0]}, {threeFavFoods[1]}, and {threeFavFoods[2]}.
        </React.Fragment>
    )
}

export default SubmitMessage;