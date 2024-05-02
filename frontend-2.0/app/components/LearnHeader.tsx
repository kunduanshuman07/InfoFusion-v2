'use client'

interface HeaderProps {
  buttonState: any;
  setButtonState: (buttonState: any) => void;
}

const LearnHeader: React.FC<HeaderProps> = ({ buttonState, setButtonState }) => {
  return (
    <div className='flex sm:flex-row flex-col mt-1 p-1'>
      <div className="grid grid-cols-1 sm:mr-auto gap-4 sm:mt-0 mt-4">
        <input className="input input-sm input-bordered my-auto" placeholder="Search Topics" />
      </div>
    </div>
  )
}

export default LearnHeader