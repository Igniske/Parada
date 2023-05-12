import Photo from "../assets/Photo.jpeg"

function Intro(){

    return(<div className="py-16 lg:pt-36 bg-slate-100">
        <div className="h-full m-auto lg:w-5/6 w-2/3 lg:flex lg:flex-nowrap">
            <div id="intro" className=" lg:w-1/2 lg:h-2/5">
                <div className="py-12"></div>
                <h3 className="pb-4 text-3xl font-sans font-semibold">Quienes somos?</h3>
                <p className="text-xl font-serif">Somos una PYME con mas de 20 años de experiencia encargada a la venta y el reparto de diarios y revistas por la zona de Quilmes centro y Oeste.</p>
            </div>
            <div className="lg:h-3/5 lg:w-1/2 w-4/5 mx-auto">
                <img className="h-full w-full border-2 rounded-lg border-white" src={Photo}/>
            </div>
        </div>
        </div>
    )
}

export default Intro;