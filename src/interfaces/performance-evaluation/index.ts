import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceEvaluationInterface {
  id?: string;
  evaluation_score: number;
  employee_id?: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  _count?: {};
}

export interface PerformanceEvaluationGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
}
