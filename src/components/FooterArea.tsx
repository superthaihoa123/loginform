import React from "react";

const FooterArea = () => {
    const [hoveredRow, setHoveredRow] = React.useState<number | null>(null);
    const itemStyle = (index: number, disabled?: boolean) => {
        return {
            cursor: 'pointer',
            borderInlineEnd: '1px solid black',
            borderBlockEnd: '1px solid black',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            blockSize: 40,
            backgroundColor: hoveredRow === index ? 'rgb(222,235,247)' : (disabled ? 'lightgrey' : 'white')
        };
    };
    const containerStyle = {
        borderBlockStart: '1px solid black',
        borderInlineStart: '1px solid black'
    };
    return(<>
        <div className="row" style={containerStyle}>
            <div key={1} className="col-6 col-sm-6 col-md-3" style={itemStyle(1)} onMouseEnter={() => setHoveredRow(1)}  onMouseLeave={() => setHoveredRow(null)} >
                    ［利用者基本情報］
            </div>
            <div key={2} className="col-6 col-sm-6 col-md-3" style={itemStyle(2)} onMouseEnter={() => setHoveredRow(2)}  onMouseLeave={() => setHoveredRow(null)}>
                    ［保険／公費情報］
            </div>
            <div key={3} className="col-6 col-sm-6 col-md-3" style={itemStyle(3)} onMouseEnter={() => setHoveredRow(3)}  onMouseLeave={() => setHoveredRow(null)}>
                    ［指示／計画］
            </div>
            <div key={4} className="col-6 col-sm-6 col-md-3" style={itemStyle(4)} onMouseEnter={() => setHoveredRow(4)}  onMouseLeave={() => setHoveredRow(null)}>
                    ［褥瘡対策看護計画］
            </div>
            <div key={5} className="col-6 col-sm-6 col-md-3" style={itemStyle(5)} onMouseEnter={() => setHoveredRow(5)}  onMouseLeave={() => setHoveredRow(null)}>
                    ［利用状況サマリー］
            </div>
            <div key={6} className="col-6 col-sm-6 col-md-3" style={itemStyle(6)} onMouseEnter={() => setHoveredRow(6)}  onMouseLeave={() => setHoveredRow(null)}>
                    ［看護サマリー］
            </div>
            <div key={7} className="col-6 col-sm-6 col-md-3" style={itemStyle(7,true)} onMouseEnter={() => setHoveredRow(7)}  onMouseLeave={() => setHoveredRow(null)}>
                    {/*  NOTHING */}
            </div>
            <div key={8} className="col-6 col-sm-6 col-md-3" style={itemStyle(8)} onMouseEnter={() => setHoveredRow(8)}  onMouseLeave={() => setHoveredRow(null)}>
                    ［申し送り情報］
            </div>
        </div>
    </>)
};

export default FooterArea;