import React from 'react';
import './header.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

class Header extends React.Component {

	render() {
		return (
			<div className="header" id="home">
				<div className="links">
					<a style={{ color: "coral" }} href="#home">
						Home
					</a>
					<a href="#portfolio">
						Projects
					</a>
					<a href="#skill">
						Skills
					</a>
					<a href="#education">
						Education
					</a>
					<a href="#contact">
						Contact
					</a>
				</div>
				<br />
				<div className="info1">
					<div className="info">
						<h1>Hi, I'm {this.props.resumeData.name}{" "}</h1>
						<h3>
							I am a {this.props.resumeData.role}, who loves to transform ideas into reality using code.
							{this.props.resumeData.roleDescription}
						</h3>
					</div>

					<div className="social">
						<a href="https://www.linkedin.com/in/kamandla-jagan-b751501ab/" target="_blank">
							<LinkedInIcon fontSize="large" />
						</a>
						<a href="http://github.com/jagan9" target="_blank">
							<GitHubIcon fontSize="large" />
						</a>
						<a href="https://www.facebook.com/search/top?q=kamandla%20jagan" target="_blank">
							<FacebookIcon fontSize="large" />
						</a>
						<a href="mailto:kamandlajagan@gmail.com" target="_blank">
							<EmailIcon fontSize="large" />
						</a>
						<a href="https://www.youtube.com/channel/UCbAI-DRaW65k-Wb7OjW1ytQ" target="_blank">
							<YouTubeIcon fontSize="large" />
						</a>
					</div>
					<a href="/jagancv.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: "none" }}>
						<button>
							Download Resume {" "}<InsertDriveFileIcon style={{ paddingLeft: "10px" }} />
						</button>
					</a>
				</div>
				<br />
				<br />
				<br />
				<a href="#portfolio" className="down_arrow">
					<ArrowDropDownCircleIcon fontSize="large" />
				</a>
			</div>
		)
	}
}

export default Header