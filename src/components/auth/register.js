import React from "react";
import firebase from "../config/firebase";
import { Grid, Form, Segment, Button, Header, Message, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Register extends React.Component {

  state = {
    username: ``,
    email: ``,
    password: ``,
    passwordConfirmation: ``,
    errors: [],
    loading: false
  };

  isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
    return !username.length || !email.length || !password.length || !passwordConfirmation.length
  }

  isPasswordInvalid = ({ password, passwordConfirmation }) => {
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return true;
    } else if (password !== passwordConfirmation) {
      return true;
    } else {
      return false;
    }
  }

  isFormValid = () => {
    let errors = [];
    let error;
    if ( this.isFormEmpty(this.state) ) {
      error = { message: `Please fill in all fields.` };
      this.setState({ errors: errors.concat(error) })
      return false;
    } else if ( this.isPasswordInvalid(this.state) ) {
      error = { message: `Passwords are invalid.`};
      this.setState({ errors: errors.concat(error) })
      return false;
    } else {
      return true;
    }
  }

  displayErrors = errors => errors.map( (error, index) => <p key={index}> {error.message} </p>);

  handleInputError = (errors, inputName) => errors.some(error => error.message.toLowerCase().includes(inputName)) ? `error` : ``

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if ( this.isFormValid(this.state) ) {
      this.setState({ errors: [], loading: true })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(newUser => {
        console.log(newUser)
        this.setState({ loading: false })
      })
      .catch(err => {
        console.log(err)
        this.setState({ errors: this.state.errors.concat(err), loading: false })
      });
    }
  }

  render() {

    const { username, email, password, passwordConfirmation, errors, loading } = this.state;

    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={ {maxWidth: 450} }>
          <Header as="h2" icon color="orange" textAlign="center">
            <Icon name="puzzle piece" color="orange">
              Roll for initiative!
            </Icon>
          </Header>
          <Form onSubmit={this.handleSubmit} size="large">
            <Segment stacked>
              <Form.Input fluid name="username" icon="user" iconPosition="left"
                placeholder="Username" onChange={this.handleChange} value={username}
                className={this.handleInputError(errors, `username`)} type="text" />

              <Form.Input fluid name="email" icon="mail" iconPosition="left"
                placeholder="Email Address" onChange={this.handleChange} value={email}
                className={this.handleInputError(errors, `email`)} type="email" />

              <Form.Input fluid name="password" icon="lock" iconPosition="left"
                placeholder="Password" onChange={this.handleChange} value={password}
                className={this.handleInputError(errors, `password`)} type="password" />

              <Form.Input fluid name="passwordConfirmation" icon="repeat" iconPosition="left"
                  placeholder="Password Confirmation" onChange={this.handleChange} value={passwordConfirmation}
                  className={this.handleInputError(errors, `password`)} type="password" />

                <Button className={loading ? `loading` : ``} disabled={loading} color="orange" fluid size="large">Submit</Button>
            </Segment>
          </Form>
          {errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </Message>
          )}
          <Message>Already a user? <Link to="/login">Login</Link></Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Register;
