/*
 ** EXAMPLE TO USE THIS COMPONENT
const items: Person[] = [
  {userId: "id1",name: "name1", kanaName: "kanaName1",dateOfBirth: "1997-10-01",age: 33, gender: 'Male'},
  {userId: "id2",name: "name2", kanaName: "kanaName2",dateOfBirth: "1997-10-01",age: 33, gender: 'Male'},
  {userId: "id3",name: "name3", kanaName: "kanaName3",dateOfBirth: "1997-10-01",age: 33, gender: 'Male'},
  {userId: "id4",name: "name4", kanaName: "kanaName4",dateOfBirth: "1997-10-01",age: 33, gender: 'Male'},
]

<TextFieldWithDropdown 
    id="drop_id" label="生年月日（年齢）" 
    labelColor='rgb(255,255,204)' 
    data={items} 
    labelFieldName='kanaName' 
    valueFieldName="userId"
/>
*/

interface TextFieldWithDropdownProps<T> {
    id: string,
    label?: string,
    labelColor?: string,
    data: T[],
    valueFieldName? : keyof T,
    labelFieldName : keyof T,
}
interface OptionData {
    value?: string,
    label: string
}

const mapToOptionData = <T extends object>(items: T[], valueFieldName?: keyof T, labelFieldName?: keyof T) => {
    const optionDatas: OptionData[] = [];
    for(let i=0;i<items.length;i++){
        const item = items[i];
        const optionData: OptionData = {
            value: valueFieldName ? String(item[valueFieldName]) : '',
            label: labelFieldName ? String(item[labelFieldName]) : '',
        };
        optionDatas.push(optionData);
    }
    return optionDatas;
}

const TextFieldWithDropdown = <T extends object>({id,label,labelColor,data,valueFieldName,labelFieldName}: TextFieldWithDropdownProps<T>) => {
    const rows: OptionData[] = mapToOptionData(data,valueFieldName,labelFieldName);
    const selectStyle = {
        flexGrow: 1,
        border:'1px solid black',
        blockSize:30,
        borderRadius:0,
        paddingBlockStart:2,
    }
    const labelStyle = {
        minInlineSize: 137,
        backgroundColor: labelColor ? labelColor : 'none'
        // backgroundColor: labelColor ? 'rgb(255,255,204)' : 'none'
    }
    const containerStyle = {
        blockSize: 34,
        display: 'flex',
        alignItems: 'center',
        fontSize: 14
    }
    return (
        <div style={containerStyle}>
            {label && (
                <div className="d-flex align-items-center me-2 h-100" style={labelStyle}>
                    <label className="me-2 px-2">{label}</label>
                </div>
            )}
            <select className='bg-white h-100' style={selectStyle} id={id}>
                {rows.map((item, index) => (
                    <option key={index} value={item.value || item.label}>{item.label}</option>
                ))}
            </select>
        </div>
    )
};

export default TextFieldWithDropdown;

