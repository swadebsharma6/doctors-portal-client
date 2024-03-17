import quote from '../../../assets/icons/quote.svg';
import { reviews } from "../../../utils/reviewsData";
import ReviewCard from "./ReviewCard";

const Testimonial = () => {
    return (
        <section className='mb-20'>
        <div className='flex justify-between items-center mb-10'>
            <div>
                <h4 className="text-xl  font-bold text-secondary">Testimonial</h4>
                <h2 className="lg:text-4xl text-2xl font-semibold">What Our Patients Says</h2>
            </div>
            <figure>
            <img src={quote} alt="Logo"  className='lg:w-48 w-28'/>
            </figure>
        </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
      {
        reviews.map(review => <ReviewCard
            key={review.id}
            review={review}
            ></ReviewCard>)
    }
      </div>
    </section>
    );
};

export default Testimonial;