import React from 'react';

export function Format_comma(val){
    let newValue = val + "";
    let len = newValue.length;
    let ch = "";
    let j = 1;
    let formatValue = "";

    newValue = newValue.replace(/\,/gi, ' ');

    len = newValue.length;

    for(let i=len; i>0; i--){
        ch = newValue.substring(i-1, i);
        formatValue = ch + formatValue;
        if((j%3) == 0 && i>1){
            formatValue = ","+formatValue;
        }
        j++;
    }
    return formatValue;
}

export function Format_NoComma(val){
    return (val+"").replace(/\,/gi, '');
}
