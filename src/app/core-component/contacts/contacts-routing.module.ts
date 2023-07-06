import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'vendor',
    loadChildren: () =>
      import('./vendor/vendor.module').then((m) => m.VendorModule),
  },
  {
    path: 'addVendor',
    loadChildren: () =>
      import('./add-vendor/add-vendor.module').then((m) => m.AddVendorModule),
  },
  {
    path: 'updateVendor/:id',
    loadChildren: () =>
      import('./update-vendor/update-vendor.module').then((m) => m.UpdateVendorModule),
  },
  {
    path: 'vendorDetails/:id',
    loadChildren: () => import('./detail-vendor/detail-vendor.module').then((m) => m.DetailVendorModule)
  },
  {
    path: 'supplier',
    loadChildren: () =>
      import('./supplier/supplier.module').then((m) => m.SupplierModule),
  },
  {
    path: 'addSupplier',
    loadChildren: () =>
      import('./add-supplier/add-supplier.module').then((m) => m.AddSupplierModule),
  },
  {
    path: 'updateSupplier/:id',
    loadChildren: () =>
      import('./update-supplier/update-supplier.module').then((m) => m.UpdateSupplierModule),
  },
  {
    path: 'supplierDetails/:id',
    loadChildren: () => import('./detail-supplier/detail-supplier.module').then((m) => m.DetailSupplierModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then((m) => m.EmployeeModule)
  },
  {
    path: 'addEmployee',
    loadChildren: () => import('./add-employee/add-employee.module').then((m) => m.AddEmployeeModule)
  },
  {
    path: 'updateEmployee/:id',
    loadChildren: () => import('./update-employee/update-employee.module').then((m) => m.UpdateEmployeeModule)
  },
  {
    path: 'employeeDetails/:id',
    loadChildren: () => import('./detail-employee/detail-employee.module').then((m) => m.DetailEmployeeModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerModule)
  },
  {
    path: 'addCustomer',
    loadChildren: () => import('./add-customer/add-customer.module').then((m) => m.AddCustomerModule)
  },
  {
    path: 'updateCustomer/:id',
    loadChildren: () => import('./update-customer/update-customer.module').then((m) => m.UpdateCustomerModule)
  },
  {
    path: 'customerDetails/:id',
    loadChildren: () => import('./detail-customer/detail-customer.module').then((m) => m.DetailCustomerModule)
  },

  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
  },
  {
    path: 'addUser',
    loadChildren: () => import('./add-user/add-user.module').then((m) => m.AddUserModule)
  },
  {
    path: 'updateUser/:id',
    loadChildren: () => import('./update-user/update-user.module').then((m) => m.UpdateUserModule)
  },
  {
    path: 'transport',
    loadChildren: () => import('./transport/transport.module').then((m) => m.TransportModule)
  },
  {
    path: 'addTransport',
    loadChildren: () => import('./add-transport/add-transport.module').then((m) => m.AddTransportModule)
  },
  {
    path: 'transportUpdate/:id',
    loadChildren: () => import('./update-transport/update-transport.module').then((m) => m.UpdateTransportModule)
  },
  {
    path: 'transportDetails/:id',
    loadChildren: () => import('./detail-transport/detail-transport.module').then((m) => m.DetailTransportModule)
  },
  {
    path: 'permissionGroup',
    loadChildren: () => import('./permission-group/permission-group.module').then((m) => m.PermissionGroupModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
