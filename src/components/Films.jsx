import React from "react";
import './Styles.css';
import Film from './Film';

const Films = (props) => {
    return (
        <div className='films'>
            {props.data.map(item => {
                return <Film filmInfo={item} review = {props.review} marks = {props.marks} onClick={{onFilm:props.onClick.onFilm}}/>
            })}
        </div>
    );
};

export {Films as default}