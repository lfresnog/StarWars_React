import React from "react";
import './Styles.css'

const Film = (props) => {
    const {onFilm} = props.onClick;
    const {
        title,
        episode_id,
        image
      } = props.filmInfo;
    return (
        <div className='film' onClick={()=>onFilm(episode_id)}>
            <div className="image">
                <img  src={image} alt=""/>
            </div>
            <div className="title">
                <h5>{title}</h5>
                <span className="episode">Episode:   {episode_id}</span>
            </div>
            <div className='stars1'>
            <span className={(props.review[episode_id-1]>=1)?`star-yellow`:`.star-grey`}>★</span>
            <span className={(props.review[episode_id-1]>=2)?`star-yellow`:`.star-grey`}>★</span>
            <span className={(props.review[episode_id-1]>=3)?`star-yellow`:`.star-grey`}>★</span>
            <span className={(props.review[episode_id-1]>=4)?`star-yellow`:`.star-grey`}>★</span>
            <span className={(props.review[episode_id-1]===5)?`star-yellow`:`.star-grey`} >★</span>
            
        </div>
        </div>
    );
};

export {Film as default}