import React from 'react';

class Form extends React.Component{
  constructor(){
    super();
    this.state={
      input: 'aaaa',
      textarea: '',
      radio: 'B',
      checkbox: ['lanqiu'],
      select: 'mango'
    }
  }
  handleSubmit(e){
    e.preventDefault();
    // console.log(this.state.input);
    // console.log(this.state.textarea);
    // console.log(this.state.radio);
    // console.log(this.state.checkbox);
  }
  handleInput(type, event){
    // console.log(type ,event.target.value);
    this.setState({[type]: event.target.value})
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' value={this.state.input} onChange={this.handleInput.bind(this,'input')}/>
          <textarea value={this.state.textarea} onChange={this.handleInput.bind(this,'textarea')}/>

          <br />

          A
          <input name="goodRadio" type="radio" value="A" onChange={this.handleInput.bind(this,'radio')}/>
          B
          <input name="goodRadio" type="radio" defaultChecked value="B" onChange={this.handleInput.bind(this,'radio')}/>
          C
          <input name="goodRadio" type="radio" value="C" onChange={this.handleInput.bind(this,'radio')}/>

          <br />

          <select value={this.state.select} onChange={this.handleInput.bind(this,'select')}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>

          <button type='submit'>提交</button>
          
        </form>
      </div>
    )
  }
}

export default Form;

// 受控组件 value={this.state.text}  onChange
// 非受控 defaultValue
