import React, { useState } from 'react';
import Button from './Button';
import { MdAdd, MdRemove } from 'react-icons/md';
import { useItemDispatch, useItemNextId } from '../ItemContext';

function ItemCreate({type}) {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');
    const [value, setValue] = useState(0);

    const dispatch = useItemDispatch();
    const nextId = useItemNextId();

    const onToggle = () => {
        setOpen(!open);
        setValue(0);
    }

    const onChangeText = e => setText(e.target.value);
    const onChangeValue = e => setValue(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            item: {
                id: nextId.current,
                text: text,
                type: type,
                value: value
            }
        });
        setText('');
        setOpen(false);
        setValue(0);
        nextId.current += 1;
    };

    const styles = {
            background: open? "#ff6b6b":"#38d9a9",
            ':hover' : {
                background: open? "#ff8787":"63e6be"
            },
            ':active': {
                background: open? "#fa5252":"20c997"
            },
            transform: open? "translate(-50%, 50%) rotate(45deg)" : "translate(-50%, 50%)"
        }
        return (
            <>
            {open && (
                <div className="insertFormPositioner">
                    <form className="insertForm">
                        <input type="text" className="input" 
                            autoFocus 
                            placeholder="내역을 입력하세요." 
                            onChange={onChangeText}
                            text={text}
                            type={type}
                        />
                        <input type="text" className="input"
                            onChange={onChangeValue}
                            value={value}
                        />
                        <div onClick={onSubmit}>
                            <Button>입력</Button>
                        </div>
                    </form>
                </div>
            )}
            <button className="circleButton" style={styles} onClick={onToggle} open={open}>
                {type === "in"? <MdAdd /> : <MdRemove />}
            </button>
        </>
        );
}

export default React.memo(ItemCreate);