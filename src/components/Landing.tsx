function Landing(){

    return <div>
    <div className="h-screen relative">
      <div className="absolute inset-0 background-image opacity-50"></div>
      <div className="lg:w-1/2 w-3/4 pt-16 m-auto relative z-10">
        <p className=" pt-36 text-black lg:text-3xl text-xl">
          ¡Descubre el placer de la lectura en papel! Sumérgete en el mundo de las noticias y las historias cautivadoras con nuestra amplia selección de diarios y revistas. ¡Encuentra tu próxima aventura entre páginas impresas y mantente al día con lo que más te apasiona!
        </p>
        <div className="m-auto pt-16 lg:w-1/6">
            <button className="rounded-full border-2 border-black h-12 w-fit px-4 text-white text-lg bg-blue-600 hover:bg-blue-800 hover:border-white"><a href="#contact">Contacto</a></button>
        </div>
        
      </div>
    </div>
  </div>
}

export default Landing;