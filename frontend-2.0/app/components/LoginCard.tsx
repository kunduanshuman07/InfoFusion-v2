'use client'

interface LoginProps{
    text: any;
}

const LoginCard:React.FC<LoginProps> = ({text}) => {
    return (
        <div className="card w-full bg-base-100 m-auto items-center">
            <div className="card-body">
                <p className="text-cyan-800 text-center">Please Sign In to view {text} !</p>
                <div className="card-actions justify-center mt-2">
                    <a href="/login" className="btn bg-cyan-700 hover:bg-cyan-500 text-white px-10 btn-sm">SignIn</a>
                </div>
            </div>
        </div>
    )
}

export default LoginCard