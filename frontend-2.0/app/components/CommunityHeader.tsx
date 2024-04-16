'use client'
import { AiFillFileAdd } from "react-icons/ai"

interface HeaderProps {
  buttonState: any;
  setButtonState: (buttonState: any) => void;
}

const CommunityHeader: React.FC<HeaderProps> = ({ buttonState, setButtonState }) => {
  return (
    <div className='flex sm:flex-row flex-col mt-1 p-1'>
      <div className='grid grid-cols-2 gap-4'>
        <div className={ `shadow-md rounded-lg p-4 py-6 cursor-pointer ${buttonState==='Interview'?'bg-slate-400 text-white': 'bg-white text-slate-400'}`} onClick={()=>setButtonState('Interview')}>
          <h1 className='text-xs text-center font-bold'>Interview Questions</h1>
        </div>
        <div className={ `shadow-md rounded-lg p-4 py-6 cursor-pointer ${buttonState==='Study'?'bg-slate-400 text-white': 'bg-white text-slate-400'}`} onClick={()=>setButtonState('Study')}>
          <h1 className='text-xs text-center font-bold'>Study Guide</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:ml-auto gap-4 sm:mt-0 mt-4">
        <input className="input input-sm input-bordered my-auto" placeholder="Search Topics" />
        <button className="btn btn-neutral btn-sm my-auto">New <AiFillFileAdd /></button>
      </div>
    </div>
  )
}

export default CommunityHeader