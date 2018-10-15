import React from 'react';
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {

  state = {
    options: []
  }
  
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => {
      return {
        options: prevState.options.filter(option => optionToRemove !== option)
      }
    });
  }

  handlePick = () => {
    const { options } = this.state;
    const index = Math.floor(Math.random() * options.length);

    alert(options[index]);
  }

  handleAddOption = option => {
    const { options } = this.state;
    if(!option) {
      return 'Enter valid value to add item'
    } else if (options.indexOf(option) > -1) {
      return 'This option already exists'
    }
    this.setState(prevState => ({
        options: prevState.options.concat(option)
      }))
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if(options) this.setState(() => ({ options }));
    } catch(e) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { options } = this.state;

    if(prevState.options.length !== options.length) {
      const json = JSON.stringify(options)
      localStorage.setItem('options', json)
    }
  }

  componentWillUnmount() {
    console.log('Goodbye!');
  }

  render() {
    const subTitle = 'Decide some stuff.';
    const { options } = this.state;

    return (
      <div>
        <Header subTitle={subTitle}/>
        <Action 
          hasOptions={options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
        <OptionModal/>
      </div>
    )
  }
}
