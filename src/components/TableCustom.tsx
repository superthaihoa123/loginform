import React from "react";
import { TextAlign, ColumnTableCustom } from "@/interfaces/ColumnTableCustom";
import { ReactNode } from "react";

/*
 ** EXAMPLE TO USE THIS COMPONENT
import { TextAlign, ColumnTableCustom } from "@/interfaces/ColumnTableCustom";
import TableCustom from "@/components/TableCustom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
interface Person {
  userId: string,
  name: string,
  kanaName: string,
  dateOfBirth: string,
  age: number,
  gender: string,
}

const exampleData: Person[] = [
  { userId: "利用者ID1", name: "利用者名1",kanaName: "利用者名カナ1",dateOfBirth: "1994-10-10", age: 25,gender:"男" },
  { userId: "利用者ID2", name: "利用者名2",kanaName: "利用者名カナ2",dateOfBirth: "1994-10-11", age: 30,gender:"女性" },
  { userId: "利用者ID3", name: "利用者名3",kanaName: "利用者名カナ3",dateOfBirth: "1994-10-12", age: 35,gender:"女性" },
];

const exampleColumns: ColumnTableCustom[] = [
  { id: "userId", label: "利用者ID", align: TextAlign.Center, minWidthValue: 100 },
  { id: "name", label: "利用者名", align: TextAlign.Center, minWidthValue: 100 },
  { id: "kanaName", label: "利用者名カナ", align: TextAlign.Center, minWidthValue: 200 },
  { id: "dateOfBirth", label: "生年月日", align: TextAlign.Center, minWidthValue: 100 },
  { id: "age", label: "年齢", align: TextAlign.Center, minWidthValue: 50 },
  { id: "gender", label: "性別", align: TextAlign.Center, minWidthValue: 50 },
];

<TableCustom<Person> data={exampleData} columns={exampleColumns}>
    <FontAwesomeIcon icon={faEye} className="px-2 text-secondary custom_hover_view"/>
    <FontAwesomeIcon icon={faPencil} className="px-2 text-secondary custom_hover_edit"/>
    <FontAwesomeIcon icon={faTrashCan} className="px-2 text-secondary custom_hover_remove"/>
</TableCustom>
*/

interface TableProps<T> {
    data: T[],
    columns: ColumnTableCustom[],
    children?: ReactNode,
    facilitiesLabel?: string,
    dataCount?: number,
}

const TableCustom = <T extends object>({ data, columns, dataCount, children, facilitiesLabel }: TableProps<T>) => {
    const [hoveredRow, setHoveredRow] = React.useState<number | null>(null);
    const tdStyle = (column?: ColumnTableCustom) => {
        const style = {
            border: '10px solid white',
            textAlign: column ? column.align : TextAlign.Right,
            minInlineSize: column ? column.minWidthValue : undefined,
        };
        return style;
    }
    const theadStyle = (column?: ColumnTableCustom) => {
        return {
            border: '10px solid white',
            borderBlockStart:'none',
            textAlign: TextAlign.Center,
            minInlineSize: column ? column.minWidthValue : undefined,
            backgroundColor:'rgb(102,153,255)',
            color:'white',
            fontWeight:'normal',
            position:'sticky' as const,
            insetBlockStart: 0
        };
    }
    const componentStyle = {
        backgroundColor: 'rgb(242,242,242)', 
        minInlineSize: 1200,
        padding: 15,
        blockSize: '100%',
        fontSize:14
    }

    return (
            <div style={componentStyle}>
                <p>{'{' + (dataCount || 0) + '}'}件、検索されました</p>
                <div className="table-container" style={{overflowY:'auto',maxBlockSize:'90%'}}>
                    <div style={{position:'sticky',blockSize:10,backgroundColor:'white'}}></div>
                    <table className="table" style={{inlineSize:'100%'}}>
                        <thead>
                            <tr>
                                {columns.map((column) => (
                                    <th key={String(column)} style={theadStyle(column)}>
                                        {String(column.label)}
                                    </th>
                                ))}
                                {children && (
                                    <th key="facilities" style={theadStyle()}>
                                        {facilitiesLabel || '利用施設'}
                                    </th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr
                                    key={index}
                                    onMouseEnter={() => setHoveredRow(index)}
                                    onMouseLeave={() => setHoveredRow(null)}
                                    style={hoveredRow === index ? { backgroundColor: 'rgb(222,235,247)' } : {}}
                                >
                                    {columns.map((column) => (
                                        <td key={String(column.id)} style={tdStyle(column)}>
                                            {String(item[column.id as keyof T])}
                                        </td>
                                    ))}
                                    {children && <td key="facilities" style={tdStyle()}>{children}</td>}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    );
};

export default TableCustom;
