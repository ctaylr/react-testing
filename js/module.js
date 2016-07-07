require('../css/style.scss');

import React from "react";
import ReactDOM from "react-dom";

class Page extends React.Component {
	constructor(props){
		super(props);
		this.state = {"name": "unknown", "className":"white"};
		this.handleChangeName = this.handleChangeName.bind(this);
		this.setCheckbox = this.setCheckbox.bind(this);
		
	}
	handleChangeName(e) {		
		this.setState({"name": e.target.value });
	}
	setCheckbox(e) {		
		if (e.target.checked){
			this.setState({"className": "green" });
		} else {
			this.setState({"className": "" });
		}
	}	
	render(){

		var main = (
					<div className={"component "+this.state.className}>
						<input type="text" value={this.state.name} onChange={this.handleChangeName}  />
						<br/>
						<label><input type="checkbox" value="green" onChange={this.setCheckbox} /> Use green?</label>
					</div>
					);
	
		return (
			<div>
			<h1>Hello, world!</h1>			
			{main}
			<h3>and Hello, {this.state.name}</h3>
			</div>
		);
	}
}

ReactDOM.render(
  <Page/>,
  document.getElementById('app')
);

document.body.setAttribute("class","");