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
        </div>
    );
};

export {Film as default}