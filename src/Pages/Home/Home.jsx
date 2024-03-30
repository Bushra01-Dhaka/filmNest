
import Banner from "../../Component/NormalCompo/Banner";
import Featured from "../../Component/NormalCompo/Featured";
import ShowMovies from "../../Component/NormalCompo/Shows/ShowMovies";
const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <ShowMovies></ShowMovies>
           <Featured></Featured>
        </div>
    );
};

export default Home;