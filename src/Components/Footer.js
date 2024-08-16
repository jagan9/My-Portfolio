import React from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import Codechef from '@material-ui/icons/ClosedCaption';

class Footer extends React.Component {
	render() {
		return (
			<div 
			id="contact"
			style={{height:"180px",
			padding:"20px",
		    background:"#191919"}}
			>
			<p className="bottombtn" style={{
				textAlign:"center",
				justifyContent:"center",
			    height:"50px",
				width:"50px",
				borderRadius:"50%",
				margin:"10px auto",
				background:"grey",
				cursor:"pointer"}}>
			<a href="#home" >
			<ExpandLessIcon fontSize="large" style={{color:"#fff",paddingTop:"7px"}} />
			</a>
			</p>

			<div className="social" style={{textAlign:"center"}}>
			  <a href="https://www.linkedin.com/in/kamandla-jagan-b751501ab/" rel="noopener noreferrer">
			 <LinkedInIcon />
			 </a>
			 <a href="https://www.codechef.com/users/jagan_9" rel="noopener noreferrer">
			 <Codechef />
			 </a>
			 <a href="mailto:kamandlajagan@gmail.com" rel="noopener noreferrer">
			 <EmailIcon />
			 </a>
			 <a href="http://github.com/jagan9" rel="noopener noreferrer">
			 <GitHubIcon />
			 </a>
			
			 </div>
			</div>
		)
	}
}

export default Footer