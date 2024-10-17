export interface Account {
    accounts_type:string,
    address:string,
    anniversary:string,
    birthday:string,
    contact_person_name:string,
    country:string,
    credit_amount:number,
    credit_days:string,
    email:string,
    gstin_uin:string,
    is_active:boolean,
    mobile:number,
    opening_balance:number,
    opening_balance_type:string,
    pan:string,
    state:string,
    title:string,
    type_of_customer:string
}
export interface creditLimitInterfase{
    billable_amount : number,
    closing_balance : number
    closing_balance_type : string
    credit_Limit : number
  }