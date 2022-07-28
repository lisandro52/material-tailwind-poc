import { Button } from '@material-tailwind/react';
import React from 'react';
import CtiCard from '../components/cti-card';
import CtiInputs from '../components/cti-inputs';
import CtiSelect from '../components/cti-select';
import CtiTabs from '../components/cti-tabs';

const ComponentList = () => {
  return <>
    <Button color="pink">Button</Button>
    <CtiCard />
    <CtiInputs />
    <CtiSelect />
    <CtiTabs />
  </>;
};

export default ComponentList;
