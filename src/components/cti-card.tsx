import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from '@material-tailwind/react';

const CtiCard = () => {
  return (
    <Card className="w-96 mt-3">
      <CardHeader floated={false} className="h-80">
        <img src="/img/team-3.jpg" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-grey" className="mb-2">
          Natalie Paisley
        </Typography>
        <Typography color="blue" className="font-medium" textGradient>
          CEO / Co-Founder
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default CtiCard;
