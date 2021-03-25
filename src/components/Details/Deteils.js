import React, {useEffect, useState} from 'react';
import './details.css';
import Main from "../Main/Main";
import {useHistory} from 'react-router-dom';
import useLaunches from '../useLaunches/useLainches';
import Preloader from "../Preloader/preloader";
import YouTube from "react-youtube";



const Details =(props)=> {

    const [launch,setLaunch]=useState(null);
    const {getLaunch}=useLaunches();

    useEffect((id)=>{
    	setLaunch(getLaunch(props.match.params.id));
	},[getLaunch]);

	console.log(launch);
	const history=useHistory();

   if(!launch) return  <Preloader/> // стилизовать предлоудер
	return (
		<>
			<Main name={launch.name}/>
			<main className="details">
				<div className="container">
					<div className="details-row">
						<div className="details-image">
							<img src={launch.links.patch.small} alt={launch.name}/>
						</div>
						<div className="details-content">
							<p className="details-description">{launch.details}</p>
						</div>
					</div>
					<div>
						<YouTube className='details-youtube' videoId={launch.links.youtube_id}/>
					</div>
				</div>
				<a onClick={history.goBack} className="button button-back">go back</a>
			</main>
		</>

	)
}
export default Details;