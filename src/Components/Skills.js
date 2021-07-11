import React from 'react';
import SkillItem from './SkillItem';

class Skills extends React.Component {
	render() {
		return (
			<div id="skill" style={{background:"#ccc",padding:"40px 0px",marginBottom:"20px"}} >
				<div className="skillsimg" style={{width:"800px",textAlign:"center",margin:"auto"}}>
				<h2 style={{textAlign:"center",padding:"0px",margin:"0px"}}>SKILLS</h2>
				<p style={{height:"2px",width:"70px",background:"red",margin:"auto"}}></p>
				{
				this.props.resumeData.skills.map((item,index)=>(
				<div key={item.category}>
				<h2> {item.category}</h2>	
				<SkillItem style={{display:"flex"}} skills={item.list} />
				</div>
				))
			}
			</div>
			</div>
		)
	}
}

export default Skills