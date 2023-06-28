import { ColumnTableCustom, TextAlign } from "@/interfaces/ColumnTableCustom";
import React from "react";
import { ReactNode } from "react";

/* 
 ** EXAMPLE TO USE THIS COMPONENT
import TableScale from "@/components/TableScale";
import { TextAlign, ColumnTableCustom } from "@/interfaces/ColumnTableCustom";
import TableCustom from "@/components/TableCustom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Person, PersonScale, toPersonScale } from "@/interfaces/Person";

const exampleData: Person[] = [
  { userId: "ID1", name: "利用者名1",kanaName: "利用者名カナ1",dateOfBirth: "1994-10-10", age: 25,gender:"男" },
  { userId: "ID2", name: "利用者名2",kanaName: "利用者名カナ2",dateOfBirth: "1994-10-11", age: 30,gender:"女性" },
  { userId: "ID3", name: "利用者名3",kanaName: "利用者名カナ3",dateOfBirth: "1994-10-12", age: 35,gender:"女性" },
  { userId: "ID4", name: "利用者名1",kanaName: "利用者名カナ1",dateOfBirth: "1994-10-10", age: 25,gender:"男" },
  { userId: "ID5", name: "利用者名2",kanaName: "利用者名カナ2",dateOfBirth: "1994-10-11", age: 30,gender:"女性" },
  { userId: "ID6", name: "利用者名3",kanaName: "利用者名カナ3",dateOfBirth: "1994-10-12", age: 35,gender:"女性" },
];

const exampleDataScale: PersonScale[] = toPersonScale(exampleData);

const exampleColumns: ColumnTableCustom[] = [
  { id: "userId", label: "利用者ID", align: TextAlign.Center, minWidthValue: 100 },
  { id: "name", label: "利用者名", align: TextAlign.Center, minWidthValue: 100 },
  { id: "kanaName", label: "利用者名カナ", align: TextAlign.Center, minWidthValue: 200 },
  { id: "dateOfBirth", label: "生年月日", align: TextAlign.Center, minWidthValue: 100 },
  { id: "age", label: "年齢", align: TextAlign.Center, minWidthValue: 50 },
  { id: "gender", label: "性別", align: TextAlign.Center, minWidthValue: 50 },
];

const exampleColumnScale: ColumnTableCustom[] = [
  { id: "userIdWithName", label: "［ID］利用者名", gridColumn: "col-6", align: TextAlign.Left},
  { id: "kanaName", label: "利用者名カナ", gridColumn: "col-6", align: TextAlign.Left},
  { id: "dateOfBirthWithAge", label: "生年月日（年齢）", gridColumn: "col-4", align: TextAlign.Left},
  { id: "gender", label: "性別", gridColumn: "col-4", align: TextAlign.Center},
];

<div style={{inlineSize:'100%'}} className="d-none d-sm-none d-md-block bg-danger">
    <TableCustom<Person> data={exampleData} columns={exampleColumns}>
        <FontAwesomeIcon icon={faEye} className="px-2 text-secondary custom_hover_view"/>
        <FontAwesomeIcon icon={faPencil} className="px-2 text-secondary custom_hover_edit"/>
        <FontAwesomeIcon icon={faTrashCan} className="px-2 text-secondary custom_hover_remove"/>
    </TableCustom>
</div>
<div style={{inlineSize:'100%'}} className="d-block d-sm-block d-md-none">
    <TableScale<PersonScale> data={exampleDataScale} columns={exampleColumnScale}>
        <FontAwesomeIcon icon={faEye} className="px-2 text-secondary custom_hover_view"/>
        <FontAwesomeIcon icon={faPencil} className="px-2 text-secondary custom_hover_edit"/>
        <FontAwesomeIcon icon={faTrashCan} className="px-2 text-secondary custom_hover_remove"/>
    </TableScale>
</div>

*/

type TableScaleProps<T> = {
    data: T[],
    columns: ColumnTableCustom[],
    children?: ReactNode,
    facilitiesLabel?: string,
    dataCount?: number,
    tableTitle?: string,
}

const TableScale = <T extends object>({ data, columns, dataCount, children, facilitiesLabel }: TableScaleProps<T>) => {
    const [hoveredRow, setHoveredRow] = React.useState<number | null>(null);
    const tHeadStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: TextAlign.Center,
        border: '5px solid white',
        borderBlockStart: 'none',
        borderInlineEnd: 'none',
        backgroundColor: 'rgb(102,153,255)',
        paddingBlock: 7,
        paddingInline: 0,
    };
    const tableHeadStyle = {
        margin: 0,
        border: '1px solid black',
        paddingBlockStart: 5,
        paddingInlineEnd: 5,
    };
    const rowStyle = (index: number) => {
        return {
            display: 'flex',
            alignItems: 'center',
            border: '1px solid black',
            borderBlockStart: 'none',
            paddingInline: 2,
            paddingBlock: 2,
            backgroundColor: hoveredRow === index ? 'rgb(222,235,247)' : '',
        }
    };
    const columnStyle = (column?: ColumnTableCustom) => {
        return {
            paddingInline: 0,
            paddingBlockStart: 3,
            textAlign: column ? column.align : TextAlign.Left,
        };
    };
    const containerStyle = {
        blockSize: '100%',
        inlineSize: '100%',
        backgroundColor: 'rgb(242,242,242)',
        fontSize: 14
    }
    return (
        <div style={containerStyle}>
            <p className="my-2">{'{' + (dataCount || 0) + '}'}件、検索されました</p>
            <div style={containerStyle}>
                {/* TABLE HEAD */}
                <div className="row" style={tableHeadStyle}>
                    {columns.map((column) => (
                        <span className={column.gridColumn || 'col-4'} style={tHeadStyle}>{String(column.label)}</span>
                    ))}
                    {children && (<span className="col-4" style={tHeadStyle}>{ facilitiesLabel || '利用施設'}</span>)}
                </div>
                {/* TABLE BODY */}
                <div className="overflow-auto h-100">
                    {data && data.map((item,index)=>(
                            <div 
                                style={rowStyle(index)}
                                onMouseEnter={()=>setHoveredRow(index)}
                                onMouseLeave={()=>setHoveredRow(null)}
                            >
                                <div className="row m-0" style={{inlineSize: children ? '80%' : '100%'}}>
                                    {columns.map((column) => (
                                        <span className={column.gridColumn || 'col-4'} style={columnStyle(column)} key={String(column.id)}>{String(item[column.id as keyof T])}</span>
                                    ))}
                                </div>
                                {children && (
                                    <div style={{inlineSize:'20%',minInlineSize:100}} className="text-end">
                                        {children}
                                    </div>
                                )}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TableScale;

