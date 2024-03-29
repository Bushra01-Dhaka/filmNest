

const MovieList = (props) => {
    return (
        <div className="flex flex-row justify-start overflow-x-auto flex-nowrap m-3 overflow-hidden">
            {
                props.movies.map((movie, index) => <>
                 <img src={movie.Poster} alt="movies" />
                </>)
            }
        </div>
    );
};

export default MovieList;