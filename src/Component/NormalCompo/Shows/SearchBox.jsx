
const SearchBox = (props) => {
    return (
        <div>
            <input className="w-[300px] p-4 rounded-[50px] border-0 bg-black text-white shadow-lg outline-none" placeholder="Search here..." 
            type="text" 
            name="search" 
            value={props.value}
            onChange={(event) => props.setSearchBoxValue(event.target.value)}
            id="" /> 
        </div>
    );
};

export default SearchBox;