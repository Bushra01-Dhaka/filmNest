import cover from "../../assets/images/cover-1.png"

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-fixed z-20" style={{backgroundImage: `url(${cover})`}}>
    <div className="hero-overlay bg-opacity-60 bg-black"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-xl  text-white">
        <h1 className="mb-5 text-6xl font-bold text-white uppercase">Millions of movies, TV shows to explore.</h1>
        <div className="flex gap-2 my-4 items-center">
            <input className="rounded-[50px] w-[100%] p-4 shadow-lg" type="text" name="search" id="" />
            <button className="btn bg-[#FE0000] hover:bg-red-700 btn-primary w-[100px] h-[50px] rounded-[150px] border-0 text-white shadow-lg">Search</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Banner;
