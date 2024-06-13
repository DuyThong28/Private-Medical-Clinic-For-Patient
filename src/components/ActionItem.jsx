import "../pages/HomePage.scss"
function ActionItem({title, description, titleButton, image }) {
    return ( 
        <div className="action-item w-50 d-flex">
            <img alt="ảnh" style={{width: "45px", height: "45px", marginRight: "12px"}} src={image}/>
            <div>
                <h6 style={{fontSize: "0.875rem", fontWeight: 700, color: "#1b59f8"}}>{title}</h6>
                <p style={{fontSize: "0.875rem", color:"#333", marginBottom: "24px"}}>{description}</p>
                <button className="btn-action">
                {titleButton}
                </button>
            </div>
        </div>
    );
}

export default ActionItem;