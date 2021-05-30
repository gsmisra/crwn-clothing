import React from 'react';
import './preview-collection-styles.scss';
import CollectionItem from  '../collection-item/collection-item-component.jsx';

const CollectionPreview = ({ title, items }) => (

    <div className='collection-preview'>
        <h1 className='collection-title'>${title.toUpperCase()}</h1>
        <div className='preview'>
            {items.map(item=>(
                <CollectionItem key={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl}/>
            ))}
        </div>
    </div>
)


export default CollectionPreview;
