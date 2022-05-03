import { useState } from "react";
import { ReactComponent as AddIcon } from 'components/icons/addContact.svg';
import PropTypes from 'prop-types';
import {FormContainer, Label, InputName, ButtonAdd} from 'components/Form/Form.styled'

export function Form({onFormSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = (evt) => {
    setName('');
    setNumber('');
    // switch (evt.target.name) {
    //   case 'name':
    //     setName(name);
    //     break;
      
    //   case 'number':
    //     setNumber(number);
    //     break;
      
    //   default:
    //     return;
    // }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onFormSubmit({name, number});
    reset();  
  };
  
  const handleNameChange = (evt) => {
    setName(evt.target.value)
  };
  
  const handleNumberChange = (evt) => {
    setNumber(evt.target.value)
  };


  return (
        <FormContainer onSubmit={handleSubmit}>
          <Label>
            Name 
          <InputName
            autoComplete="off"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleNameChange}
            
          />
          </Label>
          <Label >
          Number
          <input
            autoComplete="off"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleNumberChange} 
            />
          </Label>

        <ButtonAdd type="submit">
              Add contact <AddIcon width='12' height='15' />
        </ButtonAdd>
        

        </FormContainer>
    )
};

Form.propTypes = {
  onFormSubmit: PropTypes.func
};


// export class Form extends Component {
  // state = {
  //     name: '',
  //     number: ''
  // };
  
  // static propTypes = {
  //   onFormSubmit: PropTypes.func
  // };

  // reset = () => {
  //     this.setState({
  //         name: '',
  //         number: ''
  //     });
  // }

  //   handleSubmit = evt => {
  //       evt.preventDefault();
        
  //       this.props.onFormSubmit(this.state);
  //       this.reset();
  //   };

  //   handleChange = evt => {
  //       const { name, value } = evt.currentTarget;
  //       this.setState({ [name]: value });
  // };

// render() {
//     return (
//         <FormContainer onSubmit={this.handleSubmit}>
//           <Label>
//             Name 
//           <InputName
//             autoComplete="off"
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={this.state.name}
//             onChange={this.handleChange}
            
//           />
//           </Label>
//           <Label >
//           Number
//           <input
//             autoComplete="off"
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={this.state.number}
//             onChange={this.handleChange} 
//             />
//           </Label>

//         <ButtonAdd type="submit">
//               Add contact <AddIcon width='12' height='15' />
//         </ButtonAdd>
        

//         </FormContainer>
//     )
//     };

// };