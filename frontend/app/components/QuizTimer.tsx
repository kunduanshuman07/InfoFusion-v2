import { useTimer } from 'react-timer-hook';

export default function MyTimer({ expiryTimestamp }: any) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ 
        expiryTimestamp,
        onExpire: () => console.warn('onExpire called') 
       })

  return (
    <div>      
      <div className='ml-2 mr-2'>
        <span>{String(minutes).padStart(2, "0")}</span>:
        <span>{String(seconds).padStart(2, "0")}</span>
      </div>
    </div>
  );
}