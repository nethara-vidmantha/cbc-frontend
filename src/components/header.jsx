export default function Header(){
    return(

        <header className="w-full h-[100px] bg-accent text-white">

            <div className="w-full h-full flex relative">

                <img src="/logo.png" className="hidden lg:flex h-full absolute w-[170px] left-0  object-cover" />
                
                <div className="h-full w-full flex justify-center items-center gap-[20px] text-lg" >
                    <a href="/">Home</a>
                    <a href="/products">Products</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </header>
    )
}