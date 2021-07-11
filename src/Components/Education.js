import React from 'react'

class Education extends React.Component {
	render() {
		return (
			<div id="education" style={{maxWidth:"500px",margin:"auto",justifyContent:"center"}} >
				<h2 style={{textAlign:"center",padding:"0px",margin:"0px"}}>
				EDUCATION
				</h2>
				<p style={{margin:"auto",height:"2px",width:"130px",background:"red"}}></p>
				{this.props.resumeData.education.map((item,index)=>(
				<div style={{textAlign:"center"}} >
				<h2>
				{item.UniversityName}
				</h2>
				<i style={{fontSize:"20px",color:"grey",padding:"0px",margin:"0px"}} >
				{item.specialization}{"•"}
				</i>
				<p style={{padding:"0px",color:"grey",margin:"0px"}}>
				{item.duration}
				</p>
				<p style={{color:"grey",}} >
				{item.Achievements}
				</p>
				</div>
			))}
			<br/>
			<br/>
			<hr/>
			<br/>
			</div>
		)
	}
}

export default Education