import React from "react";
import './Styles.css'

const Stars = (props) => {
    const {onMarks} = props.onClick;
    return (
        <div className='stars'>
            <h1 className={(props.review[props.film-1]>=1)?`star-yellow`:`.star-grey`} onClick={()=>onMarks(1,props.film)}>★</h1>
            <h1 className={(props.review[props.film-1]>=2)?`star-yellow`:`.star-grey`} onClick={()=>onMarks(2,props.film)}>★</h1>
            <h1 className={(props.review[props.film-1]>=3)?`star-yellow`:`.star-grey`} onClick={()=>onMarks(3,props.film)}>★</h1>
            <h1 className={(props.review[props.film-1]>=4)?`star-yellow`:`.star-grey`} onClick={()=>onMarks(4,props.film)}>★</h1>
            <h1 className={(props.review[props.film-1]===5)?`star-yellow`:`.star-grey`} onClick={()=>onMarks(5,props.film)}>★</h1>
            <span className="p">{`${props.marks[props.film-1].length}  ${props.review[props.film-1]}` }</span>
        </div>
    );
};

export {Stars as default}