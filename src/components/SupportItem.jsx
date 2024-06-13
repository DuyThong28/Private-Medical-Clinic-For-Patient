import "../pages/HomePage.scss"

function SupportItem({img, supportName, supportLink, link}) {
    return ( 
        <a href={link} target="_blank" className="support-item d-flex">
            <img style={{width: 80, height: 80}} src={img} alt="ảnh" />
            <h3 style={{margin: "1.25rem 0"}} className="support-name">{supportName}</h3>
            <p className="support-link" >{supportLink}</p>
        </a>
    );
}

export default SupportItem;