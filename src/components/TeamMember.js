import React from 'react';

const TeamMember = props => {
	let social = [];
	for (const key of Object.keys(props.social)) {
	    social.push(
	    	<a href={props.social[key]} key={key} target="_blank"><i className={key == 'medium' || key == 'quora' ? `fa fa-${key}` : `fa fa-${key}-square`} aria-hidden="true"></i></a>
	    );
	}

	return (
		<div className="col-xs-12 col-ms-6 col-md-4 text-center">
			<div className="team-member">
				<img src={`/img/team/${props.id}.jpg`} className="img-circle img-responsive lazy-loading-image" />

				<h3>{props.name} <img src={`/img/flags/${props.country}.svg`} className="flag lazy-loading-image" /></h3>

				<div className="social">
					{social}
				</div>

				<p>{props.description}</p>
			</div>
		</div>
	)
};

export default TeamMember;
