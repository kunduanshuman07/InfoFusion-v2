import { useTimer } from 'react-timer-hook';
export default function MyTimer({ expiryTimestamp, handleTimerEnding }: any) {
  const {
    seconds,
    minutes,
  } = useTimer({ 
        expiryTimestamp,
        onExpire: () => handleTimerEnding() 
       })

  return (
    <div>      
      <div className='ml-2 mr-2 mt-2 text-white'>
        <span>{String(minutes).padStart(2, "0")}</span>:
        <span>{String(seconds).padStart(2, "0")}</span>
      </div>
    </div>
  );
}