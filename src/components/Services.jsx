import { useState } from 'react';
import { services } from '../data';
import Title from './Title';
import Service from './Service';

const Services = () => {
  const [servicesData, setServicesData] = useState(services);

  const removeService = (serviceId) => {
    setServicesData(servicesData.filter(service => service.id !== serviceId));
  }

  return (
    <section className='section services' id='services'>
      <Title title='our' subtitle='services' />

      <div className='section-center services-center'>
        {servicesData.map((service) => {
          return <Service {...service} key={service.id} onRemove={removeService}/>;
        })}
      </div>
    </section>
  );
};

export default Services;