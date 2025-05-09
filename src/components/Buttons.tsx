import React from 'react';
export interface IButton{
    colorButton:string
    label:string
    onClick?:()=>void
}

const Buttons = ({colorButton, label, onClick}:IButton) => {
    return (
        <div onClick={onClick}>
            <a href="#" className={`text-white font-semibold rounded px-4 py-2 shadow-2xl ${colorButton}` }>{label}</a>
        </div>
    );
};

export default Buttons;