import { MouseEventHandler } from "react";

type SubmitButtonProps = {
    value: string,
    width?: number,
    onClick?: MouseEventHandler,
}

const SubmitButton = ({value,width,onClick}: SubmitButtonProps) => {
    const btnStyle = {
        backgroundColor: 'rgb(91,155,213)',
        borderRadius: 24,
        inlineSize: width ? width : 400
    }
    return(
        <button className="btn text-light" style={btnStyle} onClick={onClick}> {value} </button>
    )
};

export default SubmitButton;