import React from 'react';
import { useItemState } from '../ItemContext';
import * as CommonUtils from '../CommonUtils.js';

function Head(){
    const items = useItemState();
    
    let volumn = 0;

    items.forEach(element => {
        if(element.type === "in"){
            volumn += Number(CommonUtils.Format_NoComma(element.value));
        }else{
            volumn -= Number(CommonUtils.Format_NoComma(element.value));
        }
    });

    console.log(items);

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long'});

    return (
        <div className="Head">
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
            <div className="tasks-left">count {CommonUtils.Format_comma(volumn)}</div>
        </div>
    )
}

export default Head;