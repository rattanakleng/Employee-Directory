export default function Body({users}) {
    return (
        
        <div className="container">
            <div className="row">

                {users.map(user =>
                <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>

                    <img src={user.picture.large} className="card-img-top" alt="Profile image" />

                    <div className="card-body">
                        <h5 className="card-title"> {user.name.first} {user.name.last} </h5>
        
                        <p className="card-text">Email: {user.email}</p>
                    </div>
                </div>
                </div>
                
            )}

            </div>
            
        </div>
                    
            
    )
}