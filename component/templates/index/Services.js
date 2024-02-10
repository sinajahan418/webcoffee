import ServiceItem from '@/component/modules/SrviceItem/ServiceItem';
import React from 'react';

const Services = ({serveces}) => {
  return (
    <div class="container-fluid pt-5">
    <div class="container">
        <div class="section-title">
            <h4 class="text-primary text-uppercase" >Our Services</h4>
            <h1 class="display-4">Fresh &amp; Organic Beans</h1>
        </div>
        <div class="row">
        {
              serveces.map(servec => (
                <ServiceItem
                title={servec.title}
                img={servec.img}
                icon={servec.icon}
                par={servec.par}
             />
              ))
            }
        </div>
    </div>
</div>
  );
}

export default Services;
