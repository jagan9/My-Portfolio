import React from 'react';
import ProjectView from './ProjectView';

class Portfolio extends React.Component {
	render() {
		return (
      <div id="portfolio">
      <h1 style={{textAlign:"center"}} >
      Projects
      </h1>
			<div 
			style={{
				display:"flex",
				flexWrap:"wrap",
				justifyContent:"center"
			}}
			>
				 {
				 	this.props.resumeData.portfolio.map((project,index)=>(
				 		<ProjectView item={project} key={index} />
				 	))
				 }
			</div>
      </div>
		)
	}
}

export default Portfolio