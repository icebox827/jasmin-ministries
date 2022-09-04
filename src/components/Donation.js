/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import Donat from '../assets/pexels-pixabay-271168.jpg';

function Donation() {
  return (
    <div className="donate">
      <h1 className="text-center title">Change the world</h1>
      <div className="flex justify-center mt-3">
        <Card className="w-96">
          <CardHeader color="blue" className="relative h-56">
            <img
              src={Donat}
              alt="img-blur-shadow"
              className="h-full w-full"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h5" className="mb-2">
              Jasmin ministries is a 501(c)3 organization
            </Typography>
            <Typography color="gray">
              As Jasmin Ministries continues in its mission to educate and empower individuals,
              institutions, and local faith communities, we humbly ask for your support.
              <br />
              <br />
              Because such a vital mission requires financial support, we ask that you
              consider making a generous tax-deductible gift to Jasmin Ministries. With your prayers
              and financial support we can make a greater impact in this world.
            </Typography>
          </CardBody>
          <CardFooter divider className="flex items-center justify-between py-3">
            <Typography variant="small" color="gray">
              <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
              For donations by checks, by Zelle@ 617-304-3247 Jasminministries Inc . or by wire;
              Routing # 125000024
              Wire#. 026009593
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Donation;
