import React from 'react';
import './menu-items-styles.scss';
import { withRouter } from 'react-router-dom';


const renderSubtitle = (available) => {
    if(!available.toUpperCase().includes("NOT")){
        return [<span className='subtitle'> SHOP NOW </span>,
        <span className='available'> AVAILABLE </span>]
    }
    else{
        return [<span className='subtitle'> CANNOT SHOP </span>,
        <span className='available'> NOT AVAILABLE </span>]
    }
}

const MenuItem = ( {title, imageUrl, size, available, history, linkUrl, match} ) => (

    <div className={`${size} menu-item`} 
    onClick={()=> history.push(`${match.url}${linkUrl}`)}>

        <div className='background-image' 
        style={
            {
                backgroundImage: `url(${imageUrl})`
            }
        }/>

        <div className='content'>
            <h1 className='title'> {title.toUpperCase()} </h1>
            {renderSubtitle(available)}
        </div>
    </div>
);

export default withRouter(MenuItem);