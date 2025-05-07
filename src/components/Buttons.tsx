import React from 'react';
// export interface IButton{
//     colorButton:string
//     label:string
// }

const Buttons = ({colorButton, label}) => {
    return (
        <div>
            <a href="#" className={`text-white font-semibold rounded px-4 py-2 shadow-2xl ${colorButton}` }>{label}</a>
        </div>
    );
};

export default Buttons;