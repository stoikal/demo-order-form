import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  distributorName: Yup.string().required(),
  distributionCenter: Yup.string().required(),
  paymentType: Yup.string().required(),
  expiredDate: Yup.string().required(),
  products: Yup.array().of(
    Yup.object().shape({
      product: Yup.string().required(),
      unit: Yup.string().required(),
      quantity: Yup.number().required(),
      price: Yup.number().required(),
    }),
  ),
});

export default validationSchema;
