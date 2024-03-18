import { format } from 'date-fns';
import { DayPicker, } from 'react-day-picker';
import bgImage from '../../../assets/images/bg.png';
import chair from "../../../assets/images/chair.png";

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

   

    return (
        <header className="mb-20 py-8" style={{
            background: `url(${bgImage})`,
            backgroundSize: 'cover'
        }}>
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src={chair}
                className="lg:w-1/2 w-full"
                alt="chair"
              />
              <div className="Lg:mr-10  w-full">
                <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                />
                <p className='text-xl font-bold'>You have Selected Date : {format(selectedDate, 'PP')}</p>
              </div>
            </div>
          </div>
        </header>
    );
};

export default AppointmentBanner;