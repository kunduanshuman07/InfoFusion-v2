'use client'

interface ErrorToastProps{
    text: any;
    type?: any;
}

const ErrorToast:React.FC<ErrorToastProps> = ({text, type}) => {
    return (
        <div className="toast toast-top toast-center">
            <div className={`alert ${type?'alert-success': 'alert-error'}`}>
                <h1 className='text-white text-center text-xs'>{text}</h1>
            </div>
        </div>
    )
}

export default ErrorToast