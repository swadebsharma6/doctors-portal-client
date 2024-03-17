

const ReviewCard = ({review}) => {
    const { name, photo, description, location } = review;
    return (
       <div className="card shadow-xl border">
      <div className="card-body">
        <p>{description}</p>
        <div className="card-actions flex items-center gap-4 mt-5">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={photo} alt="Photo" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="font-semibold">{location}</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ReviewCard;