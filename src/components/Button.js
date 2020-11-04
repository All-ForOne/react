import React from 'react';
import '../App.scss';

function Button({children}){
    return <button className="button">{children}</button>;
}

export default Button;