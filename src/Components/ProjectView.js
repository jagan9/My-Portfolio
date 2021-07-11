import React from 'react';
import {Box} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import InfoIcon from '@material-ui/icons/Info';
import GitHubIcon from '@material-ui/icons/GitHub';
import CallMadeIcon from '@material-ui/icons/CallMade';
import Dialog from '@material-ui/core/Dialog';

const baseUrl="../media/portfolio/";

class ProjectView extends React.Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 baseUrl:"",
			 open:false,
		}
	}

    handleClose = () =>{
    	this.setState({
    		open:false
    	})
    }

	render() {
		return (
			<div>
			
				<Box 
				className="project_card"
		          boxShadow={2}
		          width="330px"
		          style={{
		             background:"white",
		             borderRadius:"20px",
		             margin:"0px 15px 28px 15px",
		             paddingBottom:"17px",
		             overflow:"hidden",
		             padding:"5px",
		             
		          }} > 
		          <img alt="Remy Sharp" 	      
		          src={this.props.item.imgurl}
		          height="230px"
		          width="100%" />
		          <h2 style={{
		          	textAlign:"center",
		          	padding:"0px",
		          	margin:"0px"}} > 
		          	{this.props.item.title}
		           </h2>
		           <p style={{
		          	textAlign:"center",height:"60px",overflow:"hidden"}}>
		           {this.props.item.intro}
		           </p>
		           {
		           	this.props.item.techstack.map((item,index)=>(
		           		<Chip 
		           		label={item}
		           		style={{padding:"0px",
		           	    background:"#3f51b5",
		           	    color:"#fff",
		           	    marginLeft:"3px"}} />
		           		))
		           }
		           <hr/>
		           <div style={{display:"flex",
		           justifyContent:"space-around",
		           }}>
		           <InfoIcon className="icon" style={{cursor:"pointer"}} onClick={()=>this.setState({open:true})}/>
		           <a target="_blank" href={this.props.item.links.launch}>
		           <CallMadeIcon className="icon" style={{color:"#000"}} />
		           </a>
		           <a target="_blank" href={this.props.item.links.github}>
		           <GitHubIcon className="icon" style={{color:"#000"}}/>
		           </a>
		           </div>
		          </Box>
			<Dialog 
			className="dialog" 
			open={this.state.open} 
			onClose={this.handleClose}
			>
			<h1 style={{background:"#2310a0",color:"#fff",textAlign:"center",padding:"15px 0px ",margin:"0px"}} >{this.props.item.title}</h1>
			<p style={{textAlign:"center"}} >{this.props.item.des}</p>
			<ul style={{paddingBottom:"15px"}} >	
			{
				this.props.item.points && 
				this.props.item.points.map((point)=>(
				<li>{""}
				{point}
				</li>
				))
			}
			</ul>
			<button style={{
				padding:"5px 9px",
				width:"90px",
				margin:"auto",
				color:"blue",
				borderColor:"blue",
				borderRadius:"4px",
				borderWidth:"0.7px",
				marginBottom:"10px",
				cursor:"pointer"
			    }}
			    className="btn"
			    onClick={()=>this.handleClose()}
			    >close</button>
			</Dialog>
			</div>
		)
	}
}

export default ProjectView