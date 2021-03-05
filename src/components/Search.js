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
                    onSubmit={props.handleFormSubmit}
                    />                     
                </div>
                  
            <button onClick={props.sortAscending} className="btn btn-primary mb-5 mr-5">Sort A-Z</button>

            <button onClick={props.sortDescending} className="btn btn-primary mb-5">Sort Z-A</button>

        </form>
    )
}

export default Search;