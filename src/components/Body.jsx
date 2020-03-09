import React from 'react';
import './Styles.css';
import Films from './Films';
import Info from './Info';



const Body = (props) => {
    return (
        <div className="body">
            <Films data={props.data} onClick={{onFilm:props.onClick.onFilm}}/>
            <Info data={props.data} film={props.film} onClick={{onFilm:props.onClick.onFilm}}/>
        </div>
    );
};

export {Body as default}