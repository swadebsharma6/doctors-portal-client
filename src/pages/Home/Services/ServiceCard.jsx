

const ServiceCard = ({service}) => {
    const {icon, title, description} = service;
    return (
        <div className="card  bg-base-100 shadow-xl border">
  <figure className="px-10 pt-10">
    <img src={icon} alt="Icon" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    
  </div>
</div>
);
};

export default ServiceCard;