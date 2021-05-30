import React from 'react';
import SHOP_DATA_ARR from './shop-data';
import CollectionPreview from '../../components/preview-collection/preview-collection-component';

class ShopPage extends React.Component{

    constructor(props) {
        super(props);

        this.state={
            collections: SHOP_DATA_ARR
        }
    }

    render(){
    
        return (<div className='shop-page'>
            <div>
                {this.state.collections.map(collection =>(
                    <CollectionPreview key={collection.id} 
                                    title={collection.title} 
                                    items={collection.items}/>
                ))}
            </div>
        </div>);
    }
}

export default ShopPage;