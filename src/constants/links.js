import React from 'react';
import { FaCcStripe, FaCreditCard, FaAlipay } from 'react-icons/fa';
import { GrServices } from 'react-icons/gr';
export default [
  {
    page: 'services',
    label: 'containers',
    url: `/services/container`,
    icon: <GrServices className='icon' />,
  },
  {
    page: 'services',
    label: 'plant',
    url: `/services/hire`,
    icon: <GrServices className='icon' />,
  },
  {
    page: 'services',
    label: 'fuel',
    url: `/services/fuel`,
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
    url: `/contact/contact`,
    icon: <FaAlipay className='icon' />,
  },
];
