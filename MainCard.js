import React from 'react';
import NewCard from '../components/NewCard';

class MainCard extends React.Component {

    i = 0;

    state = {
        task: '',
        deadline: '',
        importance: '',
        cards: []
    }

    handleChange = (event) => (
        this.setState({[event.target.name]: event.target.value})
    )

    handleSubmit = (event) => {
        event.preventDefault();
        this.refs['task'].form.reset();
        this.refs['dl'].form.reset();
        this.refs['impt'].form.reset();
    }

    onButtonClick = () => {
        const card = <NewCard key = {this.i} task = {this.state.task} deadline = {this.state.deadline} importance = {this.state.importance} removal = {this.onRemovalButtonClick}/>;
        this.setState(prevState => ({
            cards: [...prevState.cards, card]}));
        this.i++;
        this.setState({
            task: '',
            deadline: '',                
            importance: ''
        });
    }

    onRemovalButtonClick = (key) => {
        const newArray = [...this.state.cards];
        newArray.splice(key, 1);
        this.setState({cards: newArray});
    } 

    render() {
        return (
            <div> 
            <form onSubmit = {this.handleSubmit}>
                <label> Task: </label>
                <input name = "task"  onInput = {this.handleChange} ref = "task" type = "text" style = {{width: 200}}/>
                <br/>
                <label> Deadline: </label>
                <input name = "deadline" onInput = {this.handleChange} ref = "dl" type = "text" style = {{width: 200}}/>
                <br/>
                <label> Importance: </label>
                <select name = "importance" onInput={this.handleChange} ref = "impt" style = {{width: 200, height: 21}}>
                    <option value="None">(Select option)</option>
                    <option value="Very important">Very important</option>
                    <option value="Important">Important</option>
                    <option value="Not too important">Not too important</option>
                </select>
                <br/>
                <button type = "submit" onClick = {this.onButtonClick} style = {{fontFamily: "Monotype Corsiva", fontSize: 20, margin: 5}}> Submit </button>
                <h1 style = {{color: "brown", fontSize: 30}}>{this.state.cards} </h1>
            </form>
            </div>
        );
    }

}


export default MainCard;

