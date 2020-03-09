import React from 'react';
import './Styles.css';


const Info = (props) => {
    const {onFilm} = props.onClick;
    const filtered = props.film === null ?
    [""]:
    props.data.filter(item=>item.episode_id === props.film)
    console.log(filtered);
    return (
        <div className="info">
            
            {(filtered[0] !== "" && props.film !== null)?
                <div className="all">
                    <div className="top">
                    <div className="x" onClick={()=>onFilm(null)}>x</div>
                    <div><div><img src={filtered[0].image} alt=""/></div></div>
                    <div className="text">
                        <div><h4>Title:   {filtered[0].title}</h4></div>
                        <div><h4>Episode:   {filtered[0].episode_id}</h4></div>
                        <div><h4>Director:   {filtered[0].director}</h4></div>
                        <div><h4>Release:   {filtered[0].release_date}</h4></div>
                        <div><span>Plot:   {filtered[0].opening_crawl}</span></div>
                    </div>
                </div>

                <div className="down">
                    {filtered[0].characters.map(item => {
                        return <div className="charimage">
                            <img  src={item.image} alt=""/>
                            <div className="charinfo">
                            <h5> {`${item.name}`}</h5>
                            <h5> {`${item.actor}`}</h5>
                            </div>
                        </div>
                    })}
                </div> 
                    </div>
                    
                
                   
            :null
            }

        </div>
    );
};

export {Info as default}