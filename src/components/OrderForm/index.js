import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import DetailSection from '../DetailSection';
import ProductSection from '../ProductSection';
import ActionSection from '../ActionSection';
import fetchEmployees from './fetchEmployees';
import DISTRIBUTION_CENTERS from '../../mockData/distributionCenters';
import PRODUCT_LIST from '../../mockData/products';
import PAYMENT_TYPES from '../../mockData/paymentTypes';

const OrderForm = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees({
      onSuccess: setEmployees,
    });
  }, []);

  // eslint-disable-next-line camelcase
  const distNameOptions = employees.map(({ id, employee_name }) => ({
    value: id.toString(),
    label: employee_name,
  }));

  const distCenterOptions = DISTRIBUTION_CENTERS.data.map(({ id, name }) => ({
    value: id.toString(),
    label: name,
  }));

  return (
    <div>
      <Formik
        initialValues={{
          distributorName: '',
          distributionCenter: '',
          paymentType: '',
          expiredDate: '',
          notes: '',
        }}
      >
        {({ values }) => {
          return (
            <Form>
              <DetailSection
                distNameOptions={distNameOptions}
                distCenterOptions={distCenterOptions}
                paymentOptions={PAYMENT_TYPES.data}
                values={values}
              />
              <ProductSection products={PRODUCT_LIST} />
              <ActionSection />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default OrderForm;
