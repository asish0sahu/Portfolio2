const Services = () => {
  return (
    <>
      <div className="main-container py-14">
        <h1 className="text-5xl font-bold text-center underline">
          My Services
        </h1>
        <div className="services-container space-x-5 flex mt-12">
          <div className="space-x-5 shadow-lg bg-slate-200 p-5 text-center rounded-xl services1 space-y-4 cursor-pointer hover:bg-gray-100">
            <i className="text-4xl fa-solid fa-globe"></i>
            <h1 className="text-3xl">Web Development</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              eum fuga quaerat tempore molestiae vel in reprehenderit ab
              assumenda iste quo, culpa esse atque alias adipisci tempora
              eveniet? Facere, itaque.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-1xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className="space-x-5 shadow-lg rounded-xl bg-slate-200 p-5 text-center cursor-pointer hover:bg-gray-100">
            <i className="text-4xl fa-solid fa-code"></i>
            <h1 className="text-3xl">Frontend Development</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              eum fuga quaerat tempore molestiae vel in reprehenderit ab
              assumenda iste quo, culpa esse atque alias adipisci tempora
              eveniet? Facere, itaque.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-1xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className="space-x-5 shadow-lg rounded-xl bg-slate-200 p-5 text-center cursor-pointer hover:bg-gray-100">
            <i className="text-4xl fa-solid fa-server"></i>
            <h1 className="text-3xl">Backend Development</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              eum fuga quaerat tempore molestiae vel in reprehenderit ab
              assumenda iste quo, culpa esse atque alias adipisci tempora
              eveniet? Facere, itaque.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-1xl rounded-full shadow-lg">
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
