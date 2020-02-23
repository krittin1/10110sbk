import React, {Component} from 'react'


class Create extends Component {

    constructor(props){
        super(props);
        this.state={
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            id: '',
            nickName: '',

        }
    }

    handleFirstnameChange = (e) =>{
        this.setState({
            firstName : e.target.value
        });
    }

    handleLastnameChange = (e) =>{
        this.setState({
            lastName : e.target.value
        })
    }

    handleEmailChange = (e) =>{
        this.setState({
            email : e.target.value
        })
    }

    handlePhoneChange = (e) =>{
        this.setState({
            phone : e.target.value
        })
    }

    handleIDChange = (e) =>{
        this.setState({
            id : e.target.value
        })
    }

    handleNicknameChange = (e) =>{
        this.setState({
            nickName : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        alert(this.state.firstName + " "  + this.state.lastName + " " + this.state.email
        + " " + this.state.phone +  " " + this.state.id + this.state.nickName );
        this.props.history.push("/10110sbk");
            
    }


    render(){

        return (

            <div>
                <br></br>
                <h1>
                    create your account


                </h1>

                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="unstackable two fields">
                        <div className="required field">
                        <label>First name</label>
                        <div className="ui input">
                            <input name ="firstName" 
                            type="text" 
                            placeholder="First name"
                            onChange={this.handleFirstnameChange} /></div>
                        </div>
                        <div className="required field">
                        <label>Last name</label>
                        <div className="ui input">
                            <input name ="lastName" 
                            type="text" 
                            placeholder="Last name"
                            onChange={this.handleLastnameChange} /></div>
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="required field">
                        <label>Email</label>
                        <div className="ui input">
                            <input name ="email" 
                            type="text" 
                            placeholder="example : user@gmail.com"
                            onChange={this.handleEmailChange} /></div>
                        </div>
                        <div className="required field">
                        <label>Phone</label>
                        <div className="ui input">
                            <input name="phone"
                             type="text" 
                             placeholder="xxx-xxxxxxx"
                             onChange={this.handlePhoneChange} /></div>
                        </div>
                    </div>

                    <div className="two fields">
                        <div className="required field">
                        <label>Student ID</label>
                        <div className="ui input">
                            <input name="id" 
                            type="text" 
                            placeholder="5910xxxxxx"
                            onChange={this.handleIDChange} /></div>
                        </div>
                        <div className="required field">
                        <label>Nickname</label>
                        <div className="ui input">
                            <input name ="nickName" 
                            type="text" 
                            placeholder="Nick name"
                            onChange={this.handleNicknameChange} /></div>
                        </div>
                    </div>

                    <button type="submit" className="ui positive button">Submit</button>

                       
                        </form>

            </div>

        )
    }
}

export default Create;

