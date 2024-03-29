import React from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import YouTubeIcon from '@material-ui/icons/YouTube';

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
			  <a href="https://www.linkedin.com/in/kamandla-jagan-b751501ab/" target="_blank">
			 <LinkedInIcon />
			 </a>
			 <a href="http://github.com/jagan9" target="_blank">
			 <GitHubIcon />
			 </a>
			 <a href="https://www.facebook.com/search/top?q=kamandla%20jagan" target="_blank">
			 <FacebookIcon />
			 </a>
			 <a href="mailto:kamandlajagan@gmail.com" target="_blank">
			 <EmailIcon />
			 </a>
			 <a href="https://www.youtube.com/channel/UCbAI-DRaW65k-Wb7OjW1ytQ" target="_blank">
			 <YouTubeIcon/>
			 </a>
			 </div>
			</div>
		)
	}
}

export default Footer