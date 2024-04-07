import { FaHeart } from "react-icons/fa";

const MovieList = (props) => {
    return (
        <div className=" flex flex-row justify-start overflow-x-auto flex-nowrap  overflow-hidden">
            {
                props.movies.map((movie, index) => <>
                 <img src={movie.Poster} className="image-container h-[300px] w-[300px] m-3" alt="movies" />
                 <FaHeart className="overlay"></FaHeart>
                </>)
            }
            {/* <div className="overlay flex justify-center items-center"> Add to favorite💖</div> */}
        </div>
    );
};

export default MovieList;