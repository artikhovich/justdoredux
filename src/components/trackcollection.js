import './trackcollection.css';
import React from 'react';
import {connect} from 'react-redux';

class TracksCollection extends React.Component{
	constructor(props){
		super(props);

		this.addTrack = () => {
			this.props.onAddTrack(this.trackInput.value);
			this.trackInput.value='';
		}
	}
					// this.state = {trackName:''}
					// this.trackNameChange = (event) =>{this.setState({trackName:event.target.value }) }
					// this.setState({trackName:''});
					// onChange={this.trackNameChange}
					// value={this.state.trackName} 
					// className="trackInput" 
	render(){
		// console.log(this.props.testStore);
		const addTrackButton = document.querySelectorAll('.addTrack')[0];
		return(
			<div className="TracksCollection">
				<input 
					type="text" 
					ref={(input) => {this.trackInput = input}} 
					placeholder="input track name" 
					style={{padding:'10px',margin:'10px',width:'120px'}} 
				/>
				<button 
					className="addTrack" 
					onClick={this.addTrack.bind(this)} 
					style={{
						height:'40px',
						backgroundColor:'#872d2d',
						color:'white',
						fontSize:'12px'
					}}
				>
					Add Track
				</button>

				<ul className="traklist">{
					this.props.tracks.map((track,index) =>
					<li 
						key={index} 
						className="trackitem" 
						style={{listStyle:'none',padding:'10px',fontSize:'16px'}}
						>
							{track}
						</li>
					)
				}</ul>
			</div>
			)
	}
}
export default connect(
	state => ({
		tracks: state.tracks
	}),
	dispatch => ({
		onAddTrack: (trackName) => {
			dispatch({type:'ADD_TRACK',payload:trackName})
		}
	})
)(TracksCollection);