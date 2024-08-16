import React from 'react';
import './header.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Codechef from '@material-ui/icons/ClosedCaption';
import EmailIcon from '@material-ui/icons/Email';
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
						<a href="https://www.linkedin.com/in/kamandla-jagan-b751501ab/" rel="noopener noreferrer">
							<LinkedInIcon fontSize="large" />
						</a>
						<a href="https://www.codechef.com/users/jagan_9" rel="noopener noreferrer">
							<Codechef fontSize="large" />
						</a>
						<a href="mailto:kamandlajagan@gmail.com" rel="noopener noreferrer">
							<EmailIcon fontSize="large" />
						</a>
						<a href="http://github.com/jagan9" rel="noopener noreferrer">
							<GitHubIcon fontSize="large" />
						</a>
						
						
					</div>
					<a href="/jagancv.pdf" rel="noopener noreferrer"  style={{ color: 'white', textDecoration: "none" }}>
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