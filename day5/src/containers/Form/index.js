import React, { Component } from "react"
import Welcome from "../../components/Welcome"
import FormInput from "../../components/FormInput"
import DatePicker from "../../components/DatePicker"
import {Container, FormContainer, Button} from "./styles"
import SubmitMessage from "./components/SubmitMessage"


class Form extends Component {
  // TODO: Add constructor and establish state with all the fields you want
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      gender: "",
      pronoun: "",
      hometown: "",
      threeFavFoods: ["", "", ""],
      birthday: new Date(),
      submitted: false,
    }
  }

  // TODO: Create update methods for state after creating the form structure
  updateName = async name => {
    await this.setState({
      name
    })
  }

  updateGender = async gender => {
    await this.setState({
      gender
    })
  }

  updatePronoun = async pronoun => {
    await this.setState({
      pronoun
    })
  }

  updateHometown = async hometown => {
    await this.setState({
      hometown
    })
  }

  updateThreeFavFoods = async threeFavFoods => {
    await this.setState({
      threeFavFoods
    })
  }

  updateBirthday = async birthday =>{
    await this.setState({
      birthday
    })
  }

  showResult = async () => {
    await this.setState({submitted : true})
  }

  render() {
    // TODO: Currently, this only renders the welcome component. Create a form, and various form components and place them here
    return (
      <Container>
        <Welcome name="amigo" />
        <FormContainer>
          <FormInput 
            title = "Name"
            value = {this.state.name}
            update = {this.updateName}
          />
          <FormInput 
            title = "Gender"
            value = {this.state.gender}
            update = {this.updateGender}
          />
          <FormInput 
            title = "Pronoun"
            value = {this.state.pronoun}
            update = {this.updatePronoun}
          />
          <FormInput 
            title = "Hometown"
            value = {this.state.hometown}
            update = {this.updateHometown}
          />
          <FormInput 
            title = "Three Favorite Foods"
            value = {this.state.threeFavFoods}
            update = {this.updateThreeFavFoods}
          />
          <DatePicker 
            title = "birthday"
            value = {this.state.birthday}
            update = {this.updateBirthday}
          />
        </FormContainer>
        <Button onClick={this.showResult}>Submit!</Button>
        {this.state.submitted && <SubmitMessage
          name={this.state.name}
          pronoun={this.state.pronoun}
          hometown={this.state.hometown}
          birthday={this.state.birthday}
          threeFavFoods={this.state.threeFavFoods}
        />}
      </Container>
      
    )
  }
}

export default Form
