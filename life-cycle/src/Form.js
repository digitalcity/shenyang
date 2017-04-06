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
    console.log(this.state.checkbox);
  }
  handleInput(event){
    // console.log(event.target.value);
    this.setState({input: event.target.value})
  }
  handleTeatarea(e){
    this.setState({textarea: e.target.value})
  }
  handleRadio(e){
    // console.log(e.target.value);
    this.setState({radio: e.target.value})
  }
  hanleCheckbox(e){
    // console.log(e.target.value);
    let value = e.target.value;
    let checkbox = this.state.checkbox;
    let index = checkbox.indexOf(value);

    if (index===-1) {
      checkbox.push(value)
    }else {
      checkbox.splice(index, 1)
    }
    this.setState({checkbox: checkbox})
  }
  handleSelect(e){
    // console.log(e.target.value);
    this.setState({select: e.target.value})
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' value={this.state.input} onChange={this.handleInput.bind(this)}/>
          <textarea value={this.state.textarea} onChange={this.handleTeatarea.bind(this)}/>
          <button type='submit'>提交</button>

          <br />

          A
          <input name="goodRadio" type="radio" value="A" onChange={this.handleRadio.bind(this)}/>
          B
          <input name="goodRadio" type="radio" defaultChecked value="B" onChange={this.handleRadio.bind(this)}/>
          C
          <input name="goodRadio" type="radio" value="C" onChange={this.handleRadio.bind(this)}/>

          <br />

          篮球<input name="goodCheckbox" defaultChecked type="checkbox" value="lanqiu" onChange={this.hanleCheckbox.bind(this)}/>
          足球<input name="goodCheckbox" type="checkbox" value="zuqiu" onChange={this.hanleCheckbox.bind(this)}/>
          网球<input name="goodCheckbox" type="checkbox" value="wangqiu" onChange={this.hanleCheckbox.bind(this)}/>

          <select value={this.state.select} onChange={this.handleSelect.bind(this)}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </form>
      </div>
    )
  }
}

export default Form;

// 受控组件 value={this.state.text}  onChange
// 非受控 defaultValue
