

const Card = ({info}) => {
    const {title, icon,description, bgClass} = info;
    return (
        <div className={`card text-white p-8 py-5 card-side ${bgClass} border`}>
        <figure><img src={icon} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
         
        </div>
      </div>
    );
};

export default Card;