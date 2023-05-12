

function Contact(){
    return(
        <div className="bg-blue-100">
        <div id="contact" className="hover:bg-blue-500 h-16 lg:h-12 w-full lg:w-5/6 mx-auto rounded-b-none rounded-2xl bg-blue-800">
        <ul className="flex flex-nowrap justify-around">
            <li className="text-base lg:text-xl hover:text-white px-4"><a target="" href="https://mail.google.com/mail/u/0/?fs=1&to=ignacio.manuel07@gmail.com&su=Contacto&bcc=ignacio.manuel07@gmail.com&tf=cm">Envianos un correo!</a></li>
            <li className="text-base lg:text-xl hover:text-white px-4">Contactanos por telefono!</li>
            <li className="text-base lg:text-xl hover:text-white my-auto px-4 "><a target="_blank" href="https://www.google.com/maps/place/Gran+Canaria+1300,+Quilmes,+Provincia+de+Buenos+Aires/@-34.7246398,-58.2646992,17z/data=!3m1!4b1!4m5!3m4!1s0x95a32e6ba254461f:0xbbffbd03ee157d27!8m2!3d-34.7246442!4d-58.2621243?hl=es">Visitanos!</a></li>
        </ul>
        </div>
        </div>
    )
}

export default Contact;