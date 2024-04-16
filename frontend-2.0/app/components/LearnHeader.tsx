'use client'

interface HeaderProps {
  buttonState: any;
  setButtonState: (buttonState: any) => void;
}

const LearnHeader: React.FC<HeaderProps> = ({ buttonState, setButtonState }) => {
  return (
    <div className='flex sm:flex-row flex-col mt-1 p-1'>
      <div className='grid grid-cols-2 gap-4'>
        <div className={ `shadow-md rounded-lg p-4 py-6 cursor-pointer ${buttonState==='WEBD'?'bg-slate-400 text-white': 'bg-white text-slate-400'}`} onClick={()=>setButtonState('WEBD')}>
          <h1 className='text-xs text-center font-bold'>Web development Topics</h1>
        </div>
        <div className={ `shadow-md rounded-lg p-4 py-6 cursor-pointer ${buttonState==='QUIZE'?'bg-slate-400 text-white': 'bg-white text-slate-400'}`} onClick={()=>setButtonState('QUIZE')}>
          <h1 className='text-xs text-center font-bold'>Past Quiz Explanations</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:ml-auto gap-4 sm:mt-0 mt-4">
        <input className="input input-sm input-bordered my-auto" placeholder="Search Topics" />
      </div>
    </div>
  )
}

export default LearnHeader