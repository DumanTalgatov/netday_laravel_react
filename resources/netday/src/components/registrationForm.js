import React from 'react';
import line from '../assets/images/hr-line.png';
import './RegistrationForm.css';
import axios from 'axios';

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            surname: '',
            email: '',
            phoneNumber: '',
            country: '',
            university: '',
            major: '',
            course: '',
            error_list: [],
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    // axios post запрос при регистрации
    saveUser = async (event) => {
        event.preventDefault();
        const res = await axios.post('/registration', this.state).then(
            () => {
                alert("You have been registered successfully. Later we will send you payment instructions");
            }
        );
        if(res.data.status === 200){
            console.log(res.data.message);
            this.setState({
                userName: '',
                surname: '',
                email: '',
                phoneNumber: '',
                country: '',
                university: '',
                major: '',
                course: ''
            });
        }else{
            console.log(res.data.validate_err),
            this.setState({
                // validate_err с контроллера RegistrationController
                error_list: res.data.validate_err,
            });
        }
    }


    render() {
        return (
            <div id="registration" className="flex-center flex-column">
                <div>
                    <div className="title">
                        REGISTRATION FORM
                    </div>
                    <div className="flex-center">
                        <img src={line} alt="hr-line" className="underline"/>
                    </div>
                </div>

                <div className="main-div my-20px">
                    <div>
                        <div className="sub-title">
                            <p>TEST YOURSEL !</p>
                            <p className='my-2'>MULTIPLY KNOWLEDGE !</p>
                            <p>TRY YOUR LUCK !</p>
                        </div>
                    </div>
                    <div className="form-border">
                        <form className="flex-column" onSubmit={this.saveUser}  >
                            <input type="text" name="userName" placeholder="Name" onChange={this.handleInputChange} />
                                <span style={{ color: 'red' }}>{this.state.error_list.userName}</span>
                            <input type="text" name="surname" placeholder="Surname" onChange={this.handleInputChange}/>
                                <span style={{ color: 'red' }}>{this.state.error_list.surname}</span>
                            <input type="text" name="email" placeholder="Email" onChange={this.handleInputChange}/>
                                <span style={{ color: 'red' }}>{this.state.error_list.email}</span>
                            <input type="text" name="phoneNumber" placeholder="Phone number" onChange={this.handleInputChange}/>
                                <span style={{ color: 'red' }}>{this.state.error_list.phoneNumber}</span>
                            <select name="country" onChange={this.handleInputChange}>
                                <option>Select country</option>
                                <option value="kz">Kazakhstan</option>
                                <option value="uz">Uzbekistan</option>
                                <option value="knr">China</option>
                                <option value="kg">Kyrgyzstan</option>
                            </select>
                                <span style={{ color: 'red' }}>{this.state.error_list.country}</span>
                            <input type="text" name="university" placeholder="University" onChange={this.handleInputChange}/>
                                <span style={{ color: 'red' }}>{this.state.error_list.university}</span>
                            <input type="text" name="major" placeholder="Major" onChange={this.handleInputChange}/>
                                <span style={{ color: 'red' }}>{this.state.error_list.major}</span>
                            <input type="text" name="course" placeholder="Course" onChange={this.handleInputChange}/>
                                <span style={{ color: 'red' }}>{this.state.error_list.course}</span>
                            <input className="form-button" type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegistrationForm;
