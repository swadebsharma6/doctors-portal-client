import { servicesData } from "../../../utils/servicesData";
import ServiceCard from "./ServiceCard";


const Services = () => {
    return (
        <section className="mb-20">
      <div className="text-center mb-12">
        <h4 className="text-xl font-bold text-secondary">OUR SERVICES</h4>
        <h2 className="text-3xl font-semibold">Services We Provide</h2>
      </div>
       <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
       {
        servicesData.map(service => <ServiceCard
          key={service.id}
          service={service}
          ></ServiceCard>)
      }
       </div>
    </section>
    );
};

export default Services;