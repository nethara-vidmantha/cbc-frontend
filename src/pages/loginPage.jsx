export default function LoginPage(){

    function login(){

    }

    return(
        <div className="w-full h-full bg-[url('/bg.jpg')] bg-cover bg-center flex">
            <div className="w-[50%] h-full">

            </div>
            <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-[500px] h-[500px] backdrop-blur-lg shadow-2xl rounded-2xl flex flex-col justify-center items-center gap-[20px]">
                    <input className="w-[400px] h-[40px] bg-white" />
                    <input className="w-[400px] h-[40px] bg-white" />
                    <button onClick={login} className="bg-red-900 w-[400px] h-[40px]">
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}