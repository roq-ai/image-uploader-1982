import * as yup from 'yup';

export const performanceEvaluationValidationSchema = yup.object().shape({
  evaluation_score: yup.number().integer().required(),
  employee_id: yup.string().nullable(),
});
