import Location from "../assets/Location.png";
import Info1 from "../assets/Info1.jpeg"
import Info2 from "../assets/Info2.jpeg"

function Info(){
    return(
        <div className="bg-blue-100">
        <div id="info" className="h-full pb-16 m-auto w-5/6 lg:w-2/3 space-y-6">
            <h3 className="pt-16 text-3xl">Que ofrecemos?</h3>
            <p className="text-xl w-5/6 my-auto">Ofrecemos un servicio de envio gratiuto de diarios y revistas por la zona. Trabajamos con productos lanzados por Clarin y La Nacion, ademas, de contar con mercancias usualmente encontradas en puestos de diarios y revistas.</p>
            <div className="w-full flex flex-nowrap space-x-4">
                <img className="lg:mx-auto rounded-md w-1/2 border-2 border-black" src={Info1}/> 
                <img className="mx-auto rounded-md w-1/2 border-2 border-black" src={Info2}/> 
            </div>
            <h3 className="text-3xl">Donde nos encontramos?</h3>
            <p className="text-xl w-5/6 my-auto">Nos encontramos ubicados en Gran Canaria 1295, Quilmes Oeste. Nuestro horario de atencion presencial es de 7:00 hs a 12:00 hs de lunes a sabado. Tambien puede puede contactarse con nosotros a traves de lineas telefonicas o enviando un correo electronico.</p>
            <img className="mx-auto rounded-md border-2 border-black" src={Location}/>        
        </div>
        </div>
    )
}

export default Info;