const Search = (props) => {

    return (
        <form>            
            <div className="form-group">
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    placeholder="Search employee by first name"
                    type="text"
                    className="form-control"
                    id="search"
                    aria-describedby="search keyword"
                     />                     
                </div>      

        </form>
    )
}

export default Search;