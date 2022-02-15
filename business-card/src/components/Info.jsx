const Info = () => {
    return (
        <div className="card--info">
            <img src="..." className="card--img" alt="Sif Aagaard-Svendsen" />
            <div className="card-body">
                <h2 className="card--name">Sif Aagaard-Svendsen</h2>
                <h4 className="card--job">Webdeveloper</h4>
                <a href="mailto:sif@aagaard-svendsen.dk" className="btn btn-light card--btn">
                    <i className="fa-solid fa-envelope"></i>
                    Email
                </a>
            </div>
        </div>
        
    )
};

export default Info;