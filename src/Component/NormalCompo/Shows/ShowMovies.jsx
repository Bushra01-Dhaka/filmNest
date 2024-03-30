import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import MovieListHeading from "./MovieListHeading";
import SearchBox from "./SearchBox";

const ShowMovies = () => {

    const [movies, setMovies] = useState([]);
    const [searchBoxValue, setSearchBoxValue] = useState("");

    const getMovieRequest = async (searchBoxValue) => {
        const url = `http://www.omdbapi.com/?s=${searchBoxValue}&apikey=cbb1a5e8`;

        const response = await fetch(url);
        const responseData = await response.json();
        console.log(responseData);

        if(responseData.Search)
        {
            setMovies(responseData.Search);
        }

    }

    useEffect(() => {
       getMovieRequest(searchBoxValue);
    }, [searchBoxValue])

    return (
        <div className="min-h-[100vh] py-20 bg-[#FE0000] container-fluid">
            <div className="m-3 text-white flex flex-col md:flex-row justify-between items-center">
                <div className="flex-1">
                <MovieListHeading heading="Movies"></MovieListHeading>
                 <p className="md:max-w-lg text-xl pt-6">Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>
                </div>
                <div className="pt-6 md:pt-0">
                   <SearchBox searchBoxValue={searchBoxValue}
                   setSearchBoxValue={setSearchBoxValue}
                   ></SearchBox>
                </div>
            </div>

           <div className="py-20">
           <MovieList movies={movies}></MovieList> 
           </div>
        </div>
    );
};

export default ShowMovies;