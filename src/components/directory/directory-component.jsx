import React from 'react';
import './directory-styles.scss';
import MenuItem from '../menu-item/menu-item-component';

class Directory extends React.Component{

    constructor(){
        super();

        this.state = {
            seactions:[
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats',
                  inStore: 'available'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets',
                  inStore: 'available'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers',
                  inStore: 'available'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens',
                  size: 'large',
                  inStore: 'not available'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens',
                  size: 'large',
                  inStore: 'available'
                }
              ]
        }
    }


    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.seactions.map(section => (
                        <MenuItem key={section.id} 
                        title={section.title} 
                        imageUrl={section.imageUrl} 
                        size={section.size} 
                        available={section.inStore}
                        linkUrl={section.linkUrl}/>
                    ))
                }
            </div>
        )
    }
}


export default Directory;