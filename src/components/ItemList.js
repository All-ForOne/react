import React from 'react';
import Item from './Item';
import { useItemState } from '../ItemContext';
import * as CommonUtils from '../CommonUtils.js';

function ItemList() {
    const items = useItemState();

    return (
        <div className="listBlock">
            {items.map(item => (
                <Item 
                key={item.id}
                id={item.id}
                text={item.text}
                type={item.type}
                value={CommonUtils.Format_comma(item.value)}
                category={item.category}
                />
            ))}
        </div>
    );
}

export default ItemList;