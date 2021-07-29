import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import DetailSection from '../DetailSection';
import ProductSection from '../ProductSection';
import ActionSection from '../ActionSection';
import fetchEmployees from './fetchEmployees';
import DISTRIBUTION_CENTERS from '../../mockData/distributionCenters';
import PRODUCT_LIST from '../../mockData/products';
import PAYMENT_TYPES from '../../mockData/paymentTypes';
import validationSchema from './formSchema';

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

  const initialProduct = { product: '', unit: '', quantity: '', price: '' };

  const createAddProductHandler = (products, setFieldValue) => () => {
    setFieldValue('products', [...products, initialProduct]);
  };

  const createRemoveProductHandler = (products, setFieldValue) => (index) => {
    setFieldValue('products', [
      ...products.slice(0, index),
      ...products.slice(index + 1),
    ]);
  };

  return (
    <div>
      <Formik
        initialValues={{
          distributorName: '',
          distributionCenter: '',
          paymentType: '',
          expiredDate: '',
          notes: '',
          products: [initialProduct],
        }}
        validationSchema={validationSchema}
      >
        {({ values, setFieldValue, errors, dirty }) => {
          const isSubmitDisabled = !dirty || !!Object.keys(errors).length;
          return (
            <Form>
              <DetailSection
                distNameOptions={distNameOptions}
                distCenterOptions={distCenterOptions}
                paymentOptions={PAYMENT_TYPES.data}
                values={values}
              />
              <ProductSection
                productList={PRODUCT_LIST.products}
                values={values}
                onAddItem={createAddProductHandler(
                  values.products,
                  setFieldValue,
                )}
                onRemoveItem={createRemoveProductHandler(
                  values.products,
                  setFieldValue,
                )}
              />
              <ActionSection isSubmitDisabled={isSubmitDisabled} />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default OrderForm;
