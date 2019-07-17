import './counter.css';
import React from 'react';
import {connect} from 'react-redux';

class Counter extends React.Component{
	constructor(props){
		super(props);
		this.handleIncClick = () => {
			this.props.handleIncCounter(this.trackInput.value);
			this.trackInput.value = '';
		}
		this.handleDecClick = () => {
			this.props.handleDecCounter(this.trackInput.value); 
			this.trackInput.value = '';
		}
	}

	render(){
		return(
			<div className='counter-section'>
				<input 
					type = 'number'
					style = {{fontSize:'16px',height:'25px',width:'150px'}}
					placeholder = 'Input amount'
					ref = {(input) => {this.trackInput = input}}
				/>
				<div className="counter">
					<button className='button-count' type='button'
						onClick={this.handleDecClick.bind(this)}
						> - </button>
					<div 
					className='counter-out' 
					style={{fontSize:'60px'}}>
						{this.props.counter ?  this.props.counter:"-" }
					</div>
					<button className='button-count' type='button'
						onClick={this.handleIncClick.bind(this)}
						> + </button>
				</div>
			</div>
			)
	}
}

export default connect(state => ({
		counter: state.counter
	}),
	dispatch =>({
		handleIncCounter:(trackInput) => {
			dispatch({type:'INC_COUNT', payload:Number(trackInput)})
		},
		handleDecCounter:(trackInput) => {
			dispatch({type:'DEC_COUNT', payload:Number(trackInput)})
		},
	})
)(Counter);