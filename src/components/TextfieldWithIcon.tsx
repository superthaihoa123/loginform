/*
 ** EXAMPLE TO USE THIS COMPONENT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

<TextFieldWithIcon id="id_1" label="メールアドレス" labelColor='rgb(255,255,204)' >
    <FontAwesomeIcon icon={faMagnifyingGlass}/>
</TextFieldWithIcon>
*/
import { ReactNode } from "react";
import React from "react";

type TextFieldWithIconProps = {
    id: string,
    label?: string,
    labelColor?: string,
    children: ReactNode,
    onIconClick?: React.MouseEventHandler,
    required?: boolean,
}

const TextFieldWithIcon = ({id, label, labelColor, children, onIconClick, required}: TextFieldWithIconProps) => {
    const [errorAction,setErrorAction] = React.useState(false);
    const labelStyle = {
        minInlineSize: 137,
        backgroundColor: labelColor ? labelColor : 'none'
    }
    const inputStyle = {
        paddingInline: 5,
        border: errorAction ? '1px solid red' : '1px solid black',
        borderInlineEnd: 0,
        minInlineSize: 0,
        outline: 'none'
    }
    const iconStyle = {
        border: '1px solid black',
        cursor: 'pointer'
    }
    const containerStyle = {
        display: 'flex',
        blockSize: 34, 
        inlineSize: '100%',
        fontSize: 14,
    }
    return (
        <div style={containerStyle}>
            {label && (
                <div className="d-flex align-items-center me-2 h-100" style={labelStyle}>
                    <label className="me-2 px-2"> {label} </label>
                </div>
            )}
            <input type="text" className="flex-grow-1 h-100" id={id} style={inputStyle} required={required} onInvalid={()=>setErrorAction(true)} onInput={()=>setErrorAction(false)}/>
            <div className="d-flex justify-content-center align-items-center px-2 bg-white h-100" style={iconStyle} onClick={onIconClick} >
                {children}
            </div>
        </div>
    )
};

export default TextFieldWithIcon;