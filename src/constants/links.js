import React from 'react';
import {GrGroup, GrContactInfo} from 'react-icons/gr';
import {RiBuilding2Line} from 'react-icons/ri';
import {GiMineTruck, GiFuelTank} from 'react-icons/gi';
export default [
  {
    page: 'services',
    label: 'fuel',
    url: `/services/fuel`,
    icon: <GiFuelTank className='icon' />,
  },
  {
    page: 'services',
    label: 'containers',
    url: `/services/container`,
    icon: <RiBuilding2Line className='icon' />,
  },
  {
    page: 'services',
    label: 'plant',
    url: `/services/hire`,
    icon: <GiMineTruck className='icon' />,
  },
  {
    page: 'company',
    label: 'about',
    url: `/company/about`,
    icon: <GrGroup className='icon' />,
  },
  {
    page: 'contact',
    label: 'contact',
    url: `/contact/contact`,
    icon: <GrContactInfo className='icon' />,
  },
];
