import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';

const routes: Routes = [
  { path: '', redirectTo: 'productlist', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: 'productlist',
        loadChildren: () =>
          import('./productlist/productlist.module').then(
            (m) => m.ProductlistModule
          ),
      },
      {
        path: 'addproduct',
        loadChildren: () =>
          import('./addproduct/addproduct.module').then(
            (m) => m.AddproductModule
          ),
      },
      {
        path: 'categorylist',
        loadChildren: () =>
          import('./categorylist/categorylist.module').then(
            (m) => m.CategorylistModule
          ),
      },
      {
        path: 'subcategorylist',
        loadChildren: () =>
          import('./subcategorylist/subcategorylist.module').then(
            (m) => m.SubcategorylistModule
          ),
      },
      {
        path: 'subCategoryGroup',
        loadChildren: () =>
          import('./subcategory-group/subcategory.gr.module').then(
            (m) => m.subcatModule
          ),
      },
      {
        path: 'subCategoryDetails/:id',
        loadChildren: () =>
          import('./subcategory-group-details/subcategory-group-details.module').then(
            (m) => m.SubcategoryGroupDetailsModule
          ),
      },
      {
        path: 'subaddcategory',
        loadChildren: () =>
          import('./subaddcategory/subaddcategory.module').then(
            (m) => m.SubaddcategoryModule
          ),
      },
      {
        path: 'warehouse',
        loadChildren: () =>
          import('./warehouse-list/warehouseList.module').then((m) => m.WarehouselistModule),
      },
      {
        path: 'addbrand',
        loadChildren: () =>
          import('./addbrand/addbrand.module').then((m) => m.AddbrandModule),
      },
      {
        path: 'importproduct',
        loadChildren: () =>
          import('./importproduct/importproduct.module').then(
            (m) => m.ImportproductModule
          ),
      },
      {
        path: 'barcode',
        loadChildren: () =>
          import('./barcode/barcode.module').then((m) => m.BarcodeModule),
      },
      {
        path: 'editproduct/:id',
        loadChildren: () =>
          import('./editproduct/editproduct.module').then(
            (m) => m.EditproductModule
          ),
      },
      {
        path: 'editcategory',
        loadChildren: () =>
          import('./editcategory/editcategory.module').then(
            (m) => m.EditcategoryModule
          ),
      },
      {
        path: 'editsubcategory',
        loadChildren: () =>
          import('./editsubcategory/editsubcategory.module').then(
            (m) => m.EditsubcategoryModule
          ),
      },
      {
        path: 'editbrand/:id',
        loadChildren: () =>
          import('./editbrand/editbrand.module').then((m) => m.EditbrandModule),
      },
      {
        path: 'branddetails/:id',
        loadChildren: () =>
          import('./details-brand/details-brand.module').then((m) => m.DetailsBrandModule),
      },
      {
        path: 'product-details/:id',
        loadChildren: () =>
          import('./product-details/product-details.module').then(
            (m) => m.ProductDetailsModule
          ),
      },
      {
        path: 'hsncode',
        loadChildren: () =>
          import('./hsncode/hsncode.module').then(
            (m) => m.HsncodeModule
          ),
      },
      {
        path: 'units',
        loadChildren: () =>
          import('./unit/unit.module').then(
            (m) => m.UnitModule
          ),
      },
      {
        path: 'unitconversion',
        loadChildren: () =>
          import('./unit-conversion/unit-conversion.module').then(
            (m) => m.UnitConversionModule
          ),
      },
      {
        path: 'colors',
        loadChildren: () =>
          import('./colors/colors.module').then(
            (m) => m.ColorsModule
          ),
      },
      {
        path: 'size',
        loadChildren: () =>
          import('./size/size.module').then(
            (m) => m.SizeModule
          ),
      },
      {
        path: 'tax',
        loadChildren: () =>
          import('./tax/tax.module').then(
            (m) => m.TaxModule
          ),
      },
      {
        path: 'taxSlab',
        loadChildren: () =>
          import('./tax-slabs/tax-slabs.module').then(
            (m) => m.TaxSlabsModule
          ),
      },
      {
        path: 'taxSlabList',
        loadChildren: () =>
          import('./tax-slabs-list/tax-slabs-list.module').then(
            (m) => m.TaxSlabsListModule
          ),
      },
      {
        path: 'taxSlabDetail/:id',
        loadChildren: () =>
          import('./tax-slab-detail/tax-slab-detail.module').then(
            (m) => m.TaxSlabDetailModule
          ),
      },
      {
        path: 'taxSlabUpdate/:id',
        loadChildren: () =>
          import('./tax-slab-updated/tax-slab-updated.module').then(
            (m) => m.TaxSlabUpdatedModule
          ),
      },
      {
        path: 'feature',
        loadChildren: () =>
          import('./feature/feature.module').then(
            (m) => m.FeatureModule
          ),
      },
      {
        path: 'feature_group',
        loadChildren: () =>
          import('./feature-group/feature-group.module').then(
            (m) => m.FeatureGroupModule
          ),
      },
      {
        path: 'variant',
        loadChildren: () =>
          import('./variant/variant.module').then(
            (m) => m.VariantModule
          ),
      },
      {
        path: 'country',
        loadChildren: () =>
          import('./country/country.module').then(
            (m) => m.CountryModule
          ),
      },
      {
        path: 'state',
        loadChildren: () =>
          import('./state/state.module').then(
            (m) => m.StateModule
          ),
      },
      {
        path: 'city',
        loadChildren: () =>
          import('./city/city.module').then(
            (m) => m.CityModule
          ),
      },

    ],
  },
  {
    path: 'brandlist',
    loadChildren: () =>
      import('./brandlist/brandlist.module').then((m) => m.BrandlistModule),
  },
  { path: 'subcategory-details/:id', loadChildren: () => import('./subcategorydetails/subcategorydetails.module').then((m) => m.SubcategorydetailsModule) },
  { path: 'hsncode-details/:id', loadChildren: () => import('./hsncodedetails/hsncodedetails.module').then((m) => m.HsncodedetailsModule) },
  { path: 'batch/:id', loadChildren: () => import('./batch-variant-product/batch-variant-product.module').then((m) => m.BatchVariantProductModule) },
  { path: 'batchUpdate/:id', loadChildren: () => import('./batch-variant-product-update/batch-variant-product-update.module').then((m) => m.BatchVariantProductUpdateModule) },
  { path: 'batchList/:id', loadChildren: () => import('./batch-variant-product-list/batch-variant-product-list.module').then((m) => m.BatchVariantProductListModule) },
  { path: 'batchDetails/:id', loadChildren: () => import('./batch-variant-product-details/batch-variant-product-details.module').then((m) => m.BatchVariantProductDetailsModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule { }
