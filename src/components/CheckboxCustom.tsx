type CheckBoxProps = {
    id: string,
    label: string,
    value?: string,
}

const CheckBoxCustom = ({id,label,value}: CheckBoxProps) => {
    const inputStyle = {
        inlineSize: 24,
        blockSize: 24
    }
    return(
        <div className="d-flex align-item-center">
            <input type="checkbox" className="mx-1" id={id} value={value} style={inputStyle} />
            <label>{label}</label>
        </div>
    )
};

export default CheckBoxCustom;