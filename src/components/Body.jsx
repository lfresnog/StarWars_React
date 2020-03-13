import React from 'react';
import './Styles.css';
import Films from './Films';
import Info from './Info';



const Body = (props) => {
    return (
        <div className="body">
            <Films data={props.data} review = {props.review} marks = {props.marks} onClick={{onFilm:props.onClick.onFilm}}/>
            <Info data={props.data} review = {props.review} marks = {props.marks} film={props.film} onClick={{onFilm:props.onClick.onFilm, onMarks:props.onClick.onMarks}}/>
        </div>
    );
};

export {Body as default}