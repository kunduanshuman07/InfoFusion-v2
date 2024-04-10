'use client'

interface StatComponentProps{
    color: any;
    contentone: any;
    contenttwo: any;
    contentthree: any;
}

const StatComponent:React.FC<StatComponentProps> = ({color, contentone, contenttwo, contentthree}) => {
    const screenWidth = typeof window !== 'undefined' ? window.screen.availWidth : 1001;
    return (
        <div className={` shadow-md  ${screenWidth<1000?'w-full': 'w-1/3 pl-2 pr-2 ml-2 mr-2'} rounded-lg ${color==='red'? 'bg-[#dc2626]':color==='blue'?'bg-[#0284c7]':'bg-[#f59e0b]'} text-white`}>
            <div className="stat place-items-center">
                <div className="stat-title text-white mb-1">{contentone}</div>
                <div className="stat-value mb-1">{contenttwo}</div>
                <div className="stat-desc text-white">{contentthree}</div>
            </div>
        </div>
    )
}

export default StatComponent