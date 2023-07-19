import * as yup from 'yup';

export const timeTrackingValidationSchema = yup.object().shape({
  hours_logged: yup.number().integer().required(),
  employee_id: yup.string().nullable(),
});
