import React from 'react'

interface StatComponentProps{
    color: any;
    contentone: any;
    contenttwo: any;
    contentthree: any;
}

const StatComponent:React.FC<StatComponentProps> = ({color, contentone, contenttwo, contentthree}) => {
    return (
        <div className={`pl-2 pr-2 shadow-md ml-2 mr-2 w-1/3 rounded-lg ${color==='red'? 'bg-[#dc2626]':color==='blue'?'bg-[#0284c7]':'bg-[#f59e0b]'} text-white`}>
            <div className="stat place-items-center">
                <div className="stat-title text-white mb-1">{contentone}</div>
                <div className="stat-value mb-1">{contenttwo}</div>
                <div className="stat-desc text-white">{contentthree}</div>
            </div>
        </div>
    )
}

export default StatComponent