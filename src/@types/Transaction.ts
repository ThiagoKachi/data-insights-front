export interface ITransaction {
  id: string;
  transaction_date: string;
  category: string;
  description: string;
  type: string;
  value: string;
  payment_method: string;
  status: string;
  entity: string;
  invoice_number: string;
  responsible: string;
  cost_center: string;
  due_date: string;
  taxes: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  file_id: string;
}
