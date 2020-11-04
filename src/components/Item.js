import React from 'react';
import { MdDelete } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useItemDispatch } from '../ItemContext';

function Item({ id, type, text, value }) {
    const style = {
        color: type === 'in'? "#38d9a9":"#ff6b6b",
    }

    const dispatch = useItemDispatch();
    const onRemove = () => dispatch({type: 'REMOVE', id});
    return (
        <div className="itemBlock">
            <div className="type" style={style}>{type ==='in' && <AiOutlinePlus />}{type === 'out' && <AiOutlineMinus />}</div>
            <div className="value">{value}</div>
            <div className="text">{text}</div>
            <div className="remove" onClick={onRemove}>
                <MdDelete />
            </div>
        </div>

    );
}

export default React.memo(Item);