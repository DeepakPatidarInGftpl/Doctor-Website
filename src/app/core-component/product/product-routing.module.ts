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
        path: 'addSubCategoryGroup',
        loadChildren: () =>
          import('./add-subcategory-group/add-subcategory-group.module').then(
            (m) => m.AddSubcategoryGroupModule
          ),
      },
      {
        path: 'editSubCategoryGroup/:id',
        loadChildren: () =>
          import('./edit-subcategory-group/edit-subcategory-group.module').then(
            (m) => m.EditSubcategoryGroupModule
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
  { path: 'batchUpdate/:id/:v_id', loadChildren: () => import('./batch-variant-product-update/batch-variant-product-update.module').then((m) => m.BatchVariantProductUpdateModule) },
  { path: 'batchList/:id', loadChildren: () => import('./batch-variant-product-list/batch-variant-product-list.module').then((m) => m.BatchVariantProductListModule) },
  { path: 'batchDetails/:id', loadChildren: () => import('./batch-variant-product-details/batch-variant-product-details.module').then((m) => m.BatchVariantProductDetailsModule) },
  { path: 'stock', loadChildren: () => import('./stock-list/stock-list.module').then((m) => m.StockListModule) },
  { path: 'product-Ledger', loadChildren: () => import('./product-ledger/product-ledger.module').then((m) => m.ProductLedgerModule) },

  //stock transfer
  { path: 'add-stock-transfer', loadChildren: () => import('./add-stock-transfer/add-stock-transfer.module').then((m) => m.AddStockTransferModule) },
  { path: 'update-stock-transfer/:id', loadChildren: () => import('./stock-transfer-update/stock-transfer-update.module').then((m) => m.StockTransferUpdateModule) },
  { path: 'list-stock-transfer', loadChildren: () => import('./stock-transfer-list/stock-transfer-list.module').then((m) => m.StockTransferListModule) },
  { path: 'details-stock-transfer/:id', loadChildren: () => import('./stock-transfer-details/stock-transfer-details.module').then((m) => m.StockTransferDetailsModule) },
  //stock transfer
  { path: 'add-stock-transfer-request', loadChildren: () => import('./add-stock-transfer-request/add-stock-transfer-request.module').then((m) => m.AddStockTransferRequestModule) },
  { path: 'update-stock-transfer-request/:id', loadChildren: () => import('./stock-transfer-request-update/stock-transfer-request-update.module').then((m) => m.StockTransferRequestUpdateModule) },
  { path: 'list-stock-transfer-request', loadChildren: () => import('./stock-transfer-request-list/stock-transfer-request-list.module').then((m) => m.StockTransferRequestListModule) },
  { path: 'details-stock-transfer-request/:id', loadChildren: () => import('./stock-transfer-request-details/stock-transfer-request-details.module').then((m) => m.StockTransferRequestDetailsModule) },

  { path: 'category-details/:id', loadChildren: () => import('./category-details/category-details.module').then((m) => m.CategoryDetailsModule) },
  { path: 'color-details/:id', loadChildren: () => import('./color-details/color-details.module').then((m) => m.ColorDetailsModule) },
  { path: 'feature-details/:id', loadChildren: () => import('./feature-details/feature-details.module').then((m) => m.FeatureDetailsModule) },
  { path: 'feature-group-details/:id', loadChildren: () => import('./feature-group-details/feature-group-details.module').then((m) => m.FeatureGroupDetailsModule) },
  { path: 'size-details/:id', loadChildren: () => import('./size-details/size-details.module').then((m) => m.SizeDetailsModule) },
  { path: 'tax-details/:id', loadChildren: () => import('./tax-details/tax-details.module').then((m) => m.TaxDetailsModule) },
  { path: 'unit-conversion-details/:id', loadChildren: () => import('./unit-conversion-details/unit-conversion-details.module').then((m) => m.UnitConversionDetailsModule) },
  { path: 'unit-details/:id', loadChildren: () => import('./unit-details/unit-details.module').then((m) => m.UnitDetailsModule) },

  // prouct label
{ path: 'product-label', loadChildren: () => import('./product-label-list/product-label-list.module').then((m) => m.ProductLabelListModule) },
 { path: 'detail-product-label/:id', loadChildren: () => import('./details-product-label/details-product-label.module').then((m) => m.DetailsProductLabelModule) },
 { path: 'analysis/:query', loadChildren: () => import('./analysis-inventory-list/analysis-inventory-list.module').then((m) => m.AnalysisInventoryListModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule { }
