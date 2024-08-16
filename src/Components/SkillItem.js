import React from 'react'

function SkillItem(props) {
	const {skills} = props;
	return (
		<div style={{
			display: "flex",
			flexWrap:"wrap",
			gridTempLateColumns:" repeat(5, 1fr)",
			justifyContent:"center",
			alignItems:"center",
			textAlign: "center",
			gridGap:"1rem",
			padding: "1rem 80px",
			fontSize: "1.2rem",
		}}>
			{
				skills && skills.map((skill)=><div style={{
					padding: "1rem",
					color: '#000',
					cursor:'pointer',
				}}  
				className="skills-box">
				<div
					className="skills-img"
					 style={{
					width:"90px",
					height:"90px",
					position: "relative",
					borderRadius: "45px",
					backgroundColor: "#fff",
					display:"flex",
					justifyContent:"center",
					alignItems:"center",
					transition: ".5s",
				    }}>
					<img 
					alt="skill-item"
					src={skill.img}
					style={{
						width:'50px',
                        zIndex:'2',
					}}
					/>
					</div>
					<h5 style={{
						margin:"10px 0px 0px 0px"}} >{skill.name}</h5>
					</div>
					)
			}
		</div>
	)
}

export default SkillItem;