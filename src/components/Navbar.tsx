
function Navbar(){

    return(
        <>
        <div className="flex flex-row justify-between fixed w-full h-16 lg:h-16 bg-blue-800 z-50">
            <p className="my-auto pl-6 text-white font-bold">PARADA</p>
            <div className="pr-6 my-auto">
                <ul className=" flex flex-row space-x-2">
                    <li className="lg:text-lg text-base hover:text-white"><a href="#intro">Inicio</a></li>
                    <li className="lg:text-lg text-base hover:text-white"><a href="#info">Informacion</a></li>
                    <li className="lg:text-lg text-base hover:text-white"><a href="#contact">Contacto</a></li>
                </ul>
            </div>
        </div>
        </>
    )
        
};

export default Navbar;