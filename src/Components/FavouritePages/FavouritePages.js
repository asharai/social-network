import React from 'react';
import './FavouritePages.css'
import FavouritePage from "./FavouritePage/FavouritePage";
const FavouritePages = () => {
    const pages = [
        {id:1,
            img:'https://images.unsplash.com/photo-1604409969824-6cdc3f32d682?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1232&q=80',
            title:'The Marina Bar',
            description:'Restaurant / Bar',
            },
        {id:2,
            img:'https://images.unsplash.com/photo-1604364443142-dce0f24db3f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
            title:'Tapronus Rock',
            description:'Rock Band',
            },
        {id:3,
            img:'https://images.unsplash.com/photo-1604324056382-626e26763941?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
            title:'Thompson’s Custom Clothing Boutique',
            description:'Clothing Store',
            },
        {id:4,
            img:'https://images.unsplash.com/photo-1604161547272-167c2fd11c7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80',
            title:'Crimson Agency',
            description:'Company',
            },
        {id:5,
            img:'https://images.unsplash.com/photo-1604263920153-100bcdbcf4a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            title:'Mannequin Angel',
            description:'Clothing Store',
            },
    ]
    let page = pages.map(item=>{
        return (
            <FavouritePage id={item.id} img={item.img} title={item.title} group={item.description} />
        )
    })
    return (
        <ol className="favouritePages">
            {page}
        </ol>
    );
};

export default FavouritePages;