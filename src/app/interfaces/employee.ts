export interface employee{
    address:string,
    anniversary:string,
    attendance:number,
    country:string,
    dob:string,
    email:string,
    employee_id:number,
    fathers_name:number,
    is_active:boolean,
    is_salesman:boolean,
    mobile:number,
    name:string,
    pincode:number,
    state:string
}

export interface LogoapiInterFase {
    success: boolean;
    data: Data;
  }
  interface Data {
    auth_image: string;
    company_name: string;
    favicon: string;
    id: number;
    logo: string;
    primary_colour: string;
    secondary_colour: string;
    title_ERP: string;
    title_POS: string;
  }