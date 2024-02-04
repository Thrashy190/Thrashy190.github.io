export default interface CardTypeInterface {
  company_name: string;
  rol: string;
  start_date: string;
  end_date?: string;
  description: JSX.Element | JSX.Element[];
  logo: JSX.Element | JSX.Element[];
}
