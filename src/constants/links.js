import React from 'react';
import { FaCcStripe, FaCreditCard, FaAlipay } from 'react-icons/fa';
import { GrServices } from 'react-icons/gr';
export default [
  {
    page: 'services',
    label: 'plant hire',
    url: `/services/hire`,
    icon: <GrServices className='icon' />,
  },
  {
    page: 'company',
    label: 'contact',
    url: `/products/contact`,
    icon: <FaCcStripe className='icon' />,
  },
  {
    page: 'company',
    label: 'about',
    url: `/company/about`,
    icon: <FaCcStripe className='icon' />,
  },
  {
    page: 'contact',
    label: 'contact details',
    url: `/products/contact`,
    icon: <FaAlipay className='icon' />,
  },
];
