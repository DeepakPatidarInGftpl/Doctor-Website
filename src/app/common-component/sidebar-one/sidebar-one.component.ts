import { Component, HostBinding, OnInit, Renderer2 ,RendererFactory2,RendererStyleFlags2} from '@angular/core';
// import { SettingsService } from 'src/app/shared/settings/settings.service';
import { NavigationStart, Router } from '@angular/router';
import { LogoapiInterFase } from 'src/app/interfaces/employee';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
// import { CoreService } from 'src/app/Services/CoreService/core.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { WebsiteService } from 'src/app/Services/website/website.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-sidebar-one',
  templateUrl: './sidebar-one.component.html',
  styleUrls: ['./sidebar-one.component.scss']
})
export class SidebarOneComponent implements OnInit {

  public activePath: string = ''
  public sideBarControls: any = [
    { value: false, key: 'product' },
    { value: false, key: 'sales' },
    { value: false, key: 'purchase' },
    { value: false, key: 'expense' },
    { value: false, key: 'quotation' },
    { value: false, key: 'transfer' },
    { value: false, key: 'return' },
    { value: false, key: 'people' },
    { value: false, key: 'places' },
    { value: false, key: 'errorpages' },
    { value: false, key: 'element' },
    { value: false, key: 'charts' },
    { value: false, key: 'icons' },
    { value: false, key: 'forms' },
    { value: false, key: 'table' },
    { value: false, key: 'application' },
    { value: false, key: 'report' },
    { value: false, key: 'users' },
    { value: false, key: 'settings' },
  ];
  constructor(private Router: Router, private profileService: CompanyService,private websiteService:WebsiteService
    ,private _auth : AuthServiceService,
    private renderer : Renderer2,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.activePath = this.Router.url.split('/')[1]
    this.Router.events.subscribe((data: any) => {
      if (data instanceof NavigationStart) {
        this.activePath = data.url.split('/')[1]
      }
    });
  }

  isWarehouse;
api_url :string = environment.api;
  //master
  isCompany;
  isBranch;
  //acount
  isAccount: any
  isAccountSubType: any
  //contact
  isVendor;
  isSupplier;
  isTransport;
  isEmployee;
  isDealer;
  isCustomer;
  //product
  isProduct;
  isCategory;
  isSubcategory;
  isSubcategoryGroup;
  isBrand;
  isColors;
  isSize;
  isTax;
  isTaxSlab;
  isFeature;
  isFeatureGroup;
  isHsnCode;
  isUnit;
  isUnitConversation;
  isProductLedger: any;
  isStock: any;
  isProductLabel: any;
  isProductionVoucher:any
  //purchase
  isPurchase;
  isMaterialInward;
  isPurchaseBill;
  isDebitNotes;
  isPurchaseModule;
  //website
  isBanner: any;
  isStaticPage: any;
  isFooterpage: any;
  isFooterList: any;
  isTrendingProducts: any;
  isDealoftheDay: any;
  isAddressStore: any;
  isCouponList: any;
  isReason: any;
  isAboutBanner: any;
  isAboutFooterBanner: any;
  isNewarrivalBanner: any;
  isRatingReview: any;
  isOrder: any;
  //places
  isCity: any;
  isCountry: any;
  isState: any;
  //settings
  isFinancialYear: any;
  isPaymentTerms: any;
  isGroup: any;
  isAdditional: any
  isUser: any;
  isMembership: any;
  isCompanyDrive:any;
  //pos
  isPosOrder: any;
  // bank
  isReciept: any;
  isPurchasepos: any;
  isExpence: any;
  isCompanyBank: any;
  //sales
  isSalesOrder;
  isSalesBill;
  isSalesOutward;
  isSalesReturn;
  isSalesEstimate;
  isDeliveryChallan:any
  // transaction
  isCredit;
  isDebit;
  isCountraVoucher;
  isJournalVoucher;
  isRecieptVoucher;
  isPaymentVoucher: any
  isExpenseVoucher: any //12-1
  isMaterialConsuption: any; //22-02
  // inventory
  isStockTransport;
  isStockTransportRequest;
  isStockVerification: any;
  //hrm
  isAttendnace: any;
  isTarget: any;
  isDepartment: any;
  userDetails: any;
  isIncentive: any;
// offer
isInvoiceOffer:any;
isBrandOffer:any;
isBrandSubcategoryOffer:any;
  isScarpEntry:any;
  isAdvanceBooking:any;
  isModalOpen:any;
  ngOnInit(): void {
    this.LoadScript("assets/js/sidebar.js");
this.pageLoadData();
    if(this.websiteService.CheckBlur$){
      this.websiteService.CheckBlur$.subscribe((res:any)=>{
        // console.log(res);
        if(res !== null){
        if(res){
          this.isModalOpen = res;
          // console.log(this.isModalOpen);
        }else if(res==false){
          this.isModalOpen = res;
          // console.log(this.isModalOpen);
        }
      }
        
      })
    }
// blur bg when modal open
if(this.profileService.CheckBlur$){
  this.profileService.CheckBlur$.subscribe((res:any)=>{
    // console.log(res);
    if(res !== null){
    if(res){
      this.isModalOpen = res;
      // console.log(this.isModalOpen);
    }else if(res==false){
      this.isModalOpen = res;
      // console.log(this.isModalOpen);
    }
  }
    
  })
}
//end
    const localStorageData = JSON.parse(localStorage.getItem('auth'));
    if (localStorageData) {
      const permission = localStorageData;
      permission?.map((res: any) => {
        //account
        if (res?.content_type.app_label === 'master' && res?.content_type.model === 'account' && res?.codename == 'view_account') {
          this.isAccount = res.codename
        } else if (res?.content_type.app_label === 'master' && res?.content_type.model === 'accountsubtypes' && res?.codename == 'view_accountsubtypes') {
          this.isAccountSubType = res.codename
        }
        // master
        else if (res.content_type.app_label === 'master' && res.content_type.model === 'company' && res.codename == 'view_company') {
          this.isCompany = res.codename;
        } else if (res.content_type.app_label === 'master' && res.content_type.model === 'branch' && res.codename == 'view_branch') {
          this.isBranch = res.codename
        }
        //contact
        else if (res.content_type.app_label === 'contacts' && res.content_type.model === 'party' && res.codename == 'view_supplier') {
          this.isSupplier = res.codename;
          // console.log(this.isSupplier);
        } else if (res.content_type.app_label === 'contacts' && res.content_type.model === 'customer' && res.codename == 'view_customer') {
          this.isCustomer = res.codename
        } else if (res.content_type.app_label === 'contacts' && res.content_type.model === 'transport' && res.codename == 'view_transport') {
          this.isTransport = res.codename
        } else if (res.content_type.app_label === 'contacts' && res.content_type.model === 'vendor' && res.codename == 'view_vendor') {
          this.isVendor = res.codename
        } else if (res.content_type.app_label === 'master' && res.content_type.model === 'dealer' && res.codename == 'view_dealer') {
          this.isDealer = res.codename
        } else if (res.content_type.app_label === 'master' && res.content_type.model === 'employee' && res.codename == 'view_employee') {
          this.isEmployee = res.codename;
        }
        //purchase
        else if (res.content_type.app_label === 'master' && res.content_type.model === 'purchaseorder' && res.codename == 'view_purchaseorder') {
          this.isPurchase = res.codename;
        } else if (res.content_type.app_label === 'master' && res.content_type.model === 'materialinward' && res.codename == 'view_materialinward') {
          this.isMaterialInward = res.codename;
        } else if (res.content_type.app_label === 'master' && res.content_type.model === 'purchasebill' && res.codename == 'view_purchasebill') {
          this.isPurchaseBill = res.codename;
        } else if (res.content_type.app_label === 'master' && res.content_type.model === 'debitnote' && res.codename == 'view_debitnote') {
          this.isDebitNotes = res.codename
        }
        //product
        else if (res.content_type.app_label === 'product' && res.content_type.model === 'product' && res.codename == 'view_product') {
          this.isProduct = res.codename
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'productcategory' && res.codename == 'view_productcategory') {
          this.isCategory = res.codename
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'productsubcategory' && res.codename == 'view_productsubcategory') {
          this.isSubcategory = res.codename
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'subcategorygroup' && res.codename == 'view_subcategorygroup') {
          this.isSubcategoryGroup = res.codename
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'brands' && res.codename == 'view_brands') {
          this.isBrand = res.codename
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'color' && res.codename == 'view_color') {
          this.isColors = res.codename
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'size' && res.codename == 'view_size') {
          this.isSize = res.codename
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'tax' && res.codename == 'view_tax') {
          this.isTax = res.codename
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'taxslabs' && res.codename == 'view_taxslabs') {
          this.isTaxSlab = res.codename
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'productfeatures' && res.codename == 'view_productfeatures') {
          this.isFeature = res.codename
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'featuregroup' && res.codename == 'view_featuregroup') {
          this.isFeatureGroup = res.codename
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'hsncode' && res.codename == 'view_hsncode') {
          this.isHsnCode = res.codename
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'unit' && res.codename == 'view_unit') {
          this.isUnit = res.codename
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'unitconversion' && res.codename == 'view_unitconversion') {
          this.isUnitConversation = res.codename
        } else if (res.content_type.app_label === 'inventory' && res.content_type.model === 'stock' && res.codename == 'view_stock') {
          this.isStock = res.codename
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'productledger' && res.codename == 'view_productledger') {
          this.isProductLedger = res.codename
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'productlabel' && res.codename == 'view_productlabel') {
          this.isProductLabel = res.codename
        }else if (res.content_type.app_label === 'product' && res.content_type.model === 'productionvoucher' && res.codename == 'view_productionvoucher') {
          this.isProductionVoucher = res.codename
        }
        //pos
        else if (res.content_type.app_label === 'pos' && res.content_type.model === 'posorder' && res.codename == 'view_posorder') {
          this.isPosOrder = res.codename;
        }
        //bank
        else if (res.content_type.app_label === 'pos' && res.content_type.model === 'receipt' && res.codename == 'view_receipt') {
          this.isReciept = res.codename;
        } else if (res.content_type.app_label === 'pos' && res.content_type.model === 'payments' && res.codename == 'view_payments') {
          this.isPurchasepos = res.codename;
          // console.log(this.isPurchasepos);
        } else if (res.content_type.app_label === 'pos' && res.content_type.model === 'expance' && res.codename == 'view_expance') {
          this.isExpence = res.codename;
          // console.log(this.isExpence);
        } else if (res.content_type.app_label === 'pos' && res.content_type.model === 'companybank' && res.codename == 'view_companybank') {
          this.isCompanyBank = res.codename;
        }
        // places
        else if (res.content_type.app_label === 'places' && res.content_type.model === 'city' && res.codename == 'view_city') {
          this.isCity = res.codename;
        } else if (res.content_type.app_label === 'places' && res.content_type.model === 'state' && res.codename == 'view_state') {
          this.isState = res.codename;
        } else if (res.content_type.app_label === 'places' && res.content_type.model === 'country' && res.codename == 'view_country') {
          this.isCountry = res.codename;
        }
        //website
        else if (res.content_type.app_label === 'website' && res.content_type.model === 'banner' && res.codename == 'view_banner') {
          this.isBanner = res.codename;
          // console.log(this.isBanner);
        } else if (res.content_type.app_label === 'website' && res.content_type.model === 'staticpages' && res.codename == 'view_staticpages') {
          this.isStaticPage = res.codename;
          // console.log(this.isStaticPage);
        } else if (res.content_type.app_label === 'website' && res.content_type.model === 'footerfeatures' && res.codename == 'view_footerfeatures') {
          this.isFooterpage = res.codename;
          // console.log(this.isFooterpage);
        } else if (res.content_type.app_label === 'website' && res.content_type.model === 'footer' && res.codename == 'view_footer') {
          this.isFooterList = res.codename;
          // console.log(this.isFooterList);
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'trandingproduct' && res.codename == 'view_trandingproduct') {
          this.isTrendingProducts = res.codename;
          // console.log(this.isTrendingProducts);
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'dealsoftheday' && res.codename == 'view_dealsoftheday') {
          this.isDealoftheDay = res.codename;
          // console.log(this.isDealoftheDay);
        } else if (res.content_type.app_label === 'order' && res.content_type.model === 'storeaddress' && res.codename == 'view_storeaddress') {
          this.isAddressStore = res.codename;
          // console.log(this.isAddressStore);
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'coupon' && res.codename == 'view_coupon') {
          this.isCouponList = res.codename;
          // console.log(this.isCouponList);
        } else if (res.content_type.app_label === 'order' && res.content_type.model === 'reason' && res.codename == 'view_reason') {
          this.isReason = res.codename;
          // console.log(this.isReason);
        } else if (res.content_type.app_label === 'website' && res.content_type.model === 'aboutbanner' && res.codename == 'view_aboutbanner') {
          this.isAboutBanner = res.codename;
          // console.log(this.isAboutBanner);
        } else if (res.content_type.app_label === 'website' && res.content_type.model === 'aboutfooterbanner' && res.codename == 'view_aboutfooterbanner') {
          this.isAboutFooterBanner = res.codename;
          // console.log(this.isAboutFooterBanner);
        } else if (res.content_type.app_label === 'website' && res.content_type.model === 'newarrivalsbanner' && res.codename == 'view_newarrivalsbanner') {
          this.isNewarrivalBanner = res.codename;
          // console.log(this.isNewarrivalBanner);
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'ratingandreviewsonproduct' && res.codename == 'view_ratingandreviewsonproduct') {
          this.isRatingReview = res.codename;
          // console.log(this.isRatingReview);
        } else if (res.content_type.app_label === 'order' && res.content_type.model === 'order' && res.codename == 'view_order') {
          this.isOrder = res.codename;
          // console.log(this.isOrder);
        }
        //settings
        else if (res.content_type.app_label === 'master' && res.content_type.model === 'paymentterms' && res.codename == 'view_paymentterms') {
          this.isPaymentTerms = res.codename;
        } else if (res.content_type.app_label === 'website' && res.content_type.model === 'financialyear' && res.codename == 'view_financialyear') {
          this.isFinancialYear = res.codename;
        } else if (res.content_type.app_label === 'auth' && res.content_type.model === 'group' && res.codename == 'view_group') {
          this.isGroup = res.codename;
        } else if (res.content_type.app_label === 'master' && res.content_type.model === 'user' && res.codename == 'view_user') {
          this.isUser = res.codename
        } else if (res.content_type.app_label === 'account' && res.content_type.model === 'additionalcharge' && res.codename == 'view_additionalcharge') {
          this.isAdditional = res.codename;
        }else if (res.content_type.app_label === 'sale' && res.content_type.model === 'membership' && res.codename == 'view_membership') {
          this.isMembership = res.codename;
        } else if (res.content_type.app_label === 'master' && res.content_type.model === 'companydrive' && res.codename == 'view_companydrive') {
          this.isCompanyDrive = res.codename;
        }
        // sales
        else if (res.content_type.app_label === 'sale' && res.content_type.model === 'saleorder' && res.codename == 'view_saleorder') {
          this.isSalesOrder = res.codename;
        } else if (res.content_type.app_label === 'sale' && res.content_type.model === 'salebill' && res.codename == 'view_salebill') {
          this.isSalesBill = res.codename;
        } else if (res.content_type.app_label === 'sale' && res.content_type.model === 'materialoutward' && res.codename == 'view_materialoutward') {
          this.isSalesOutward = res.codename;
        } else if (res.content_type.app_label === 'sale' && res.content_type.model === 'salereturn' && res.codename == 'view_salereturn') {
          this.isSalesReturn = res.codename
        } else if (res.content_type.app_label === 'sale' && res.content_type.model === 'estimate' && res.codename == 'view_estimate') {
          this.isSalesEstimate = res.codename;
        } else if (res.content_type.app_label === 'sale' && res.content_type.model === 'advancebooking' && res.codename == 'view_advancebooking') {
          this.isAdvanceBooking = res.codename;
        } else if (res.content_type.app_label === 'sale' && res.content_type.model === 'deliverychallan' && res.codename == 'view_deliverychallan') {
          this.isDeliveryChallan = res.codename;
        }
        // transaction
        else if (res.content_type.app_label === 'transactions' && res.content_type.model === 'creditnote' && res.codename == 'view_creditnote') {
          this.isCredit = res.codename;
        } else if (res.content_type.app_label === 'transactions' && res.content_type.model === 'debitnote' && res.codename == 'view_debitnote') {
          this.isDebit = res.codename;
        } else if (res.content_type.app_label === 'transactions' && res.content_type.model === 'countravoucher' && res.codename == 'view_countravoucher') {
          this.isCountraVoucher = res.codename;
        } else if (res.content_type.app_label === 'transactions' && res.content_type.model === 'journalvoucher' && res.codename == 'view_journalvoucher') {
          this.isJournalVoucher = res.codename
        } else if (res.content_type.app_label === 'transactions' && res.content_type.model === 'receiptvoucher' && res.codename == 'view_receiptvoucher') {
          this.isRecieptVoucher = res.codename;
        } else if (res.content_type.app_label === 'transactions' && res.content_type.model === 'paymentvoucher' && res.codename == 'view_paymentvoucher') {
          this.isPaymentVoucher = res.codename;
        } else if (res.content_type.app_label === 'transactions' && res.content_type.model === 'expensesvoucher' && res.codename == 'view_expensesvoucher') {
          this.isExpenseVoucher = res.codename; //12-1
        } else if (res.content_type.app_label === 'inventory' && res.content_type.model === 'materialconsumption' && res.codename == 'view_materialconsumption') {
          this.isMaterialConsuption = res.codename; //12-1
        }else if (res.content_type.app_label === 'transactions' && res.content_type.model === 'scarpentry' && res.codename == 'view_scarpentry') {
          this.isScarpEntry = res.codename; //12-1
        }
        
        // inventory
        else if (res.content_type.app_label === 'inventory' && res.content_type.model === 'stocktransfer' && res.codename == 'view_stocktransfer') {
          this.isStockTransport = res.codename;
        } else if (res.content_type.app_label === 'inventory' && res.content_type.model === 'transferrequest' && res.codename == 'view_transferrequest') {
          this.isStockTransportRequest = res.codename;
          // console.log(res.codename);
        } else if (res.content_type.app_label === 'transactions' && res.content_type.model === 'stockverification' && res.codename == 'view_stockverification') {
          this.isStockVerification = res.codename;
          // console.log(res.codename);
        }
        //3-1
        // hrm
        else if (res.content_type.app_label === 'hrm' && res.content_type.model === 'attendance' && res.codename == 'view_attendance') {
          this.isAttendnace = res.codename;
          // console.log(res.codename);
        }
        else if (res.content_type.app_label === 'hrm' && res.content_type.model === 'target' && res.codename == 'view_target') {
          this.isTarget = res.codename;
          // console.log(res.codename);
        } else if (res.content_type.app_label === 'contacts' && res.content_type.model === 'department' && res.codename == 'view_department') {
          this.isDepartment = res.codename;
          // console.log(res.codename);
        } else if (res.content_type.app_label === 'hrm' && res.content_type.model === 'incentiveledger' && res.codename == 'view_incentiveledger') {
          this.isIncentive = res.codename;
          // console.log(res.codename);
        }
        //offer
        else if (res.content_type.app_label === 'master' && res.content_type.model === 'discount' && res.codename == 'view_discount') {
          this.isInvoiceOffer = res.codename
        }
      });
    }

    // this.profileService.userDetails$.subscribe((userDetails) => {
    //   this.userDetails = userDetails;
    //   const permission = this.userDetails?.permission;
    //   permission?.map((res: any) => {
    //     //account
    //     if (res?.content_type.app_label === 'master' && res?.content_type.model === 'account' && res?.codename == 'view_account') {
    //       this.isAccount =res.codename
    //     } else if (res?.content_type.app_label === 'master' && res?.content_type.model === 'accountsubtypes' && res?.codename == 'view_accountsubtypes') {
    //       this.isAccountSubType = res.codename
    //     }  
    //     // master
    //     else if (res.content_type.app_label === 'master' && res.content_type.model === 'company' && res.codename == 'view_company') {
    //       this.isCompany = res.codename;
    //     }else if (res.content_type.app_label === 'master' && res.content_type.model === 'branch' && res.codename == 'view_branch') {
    //       this.isBranch = res.codename
    //     } 
    //     //contact
    //     else if (res.content_type.app_label === 'contacts' && res.content_type.model === 'party' && res.codename == 'view_supplier') {
    //       this.isSupplier = res.codename;
    // console.log(this.isSupplier);
    //     } else if (res.content_type.app_label === 'contacts' && res.content_type.model === 'customer' && res.codename == 'view_customer') {
    //       this.isCustomer = res.codename
    //     } else if (res.content_type.app_label === 'contacts' && res.content_type.model === 'transport' && res.codename == 'view_transport') {
    //       this.isTransport = res.codename
    //     } else if (res.content_type.app_label === 'contacts' && res.content_type.model === 'vendor' && res.codename == 'view_vendor') {
    //       this.isVendor = res.codename
    //     } else if (res.content_type.app_label === 'master' && res.content_type.model === 'dealer' && res.codename == 'view_dealer') {
    //       this.isDealer = res.codename
    //     }else if (res.content_type.app_label === 'master' && res.content_type.model === 'employee' && res.codename == 'view_employee') {
    //       this.isEmployee = res.codename;
    //     }
    //     //purchase
    //     else if (res.content_type.app_label === 'master' && res.content_type.model === 'purchaseorder' && res.codename == 'view_purchaseorder') {
    //       this.isPurchase = res.codename;
    //     } else if (res.content_type.app_label === 'master' && res.content_type.model === 'materialinward' && res.codename == 'view_materialinward') {
    //       this.isMaterialInward = res.codename;
    //     } else if (res.content_type.app_label === 'master' && res.content_type.model === 'purchasebill' && res.codename == 'view_purchasebill') {
    //       this.isPurchaseBill = res.codename;
    //     } else if (res.content_type.app_label === 'master' && res.content_type.model === 'debitnote' && res.codename == 'view_debitnote') {
    //       this.isDebitNotes = res.codename
    //     }
    //     //product
    //     else if (res.content_type.app_label === 'product' && res.content_type.model === 'product' && res.codename == 'view_product') {
    //       this.isProduct = res.codename
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'productcategory' && res.codename == 'view_productcategory') {
    //       this.isCategory = res.codename
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'productsubcategory' && res.codename == 'view_productsubcategory') {
    //       this.isSubcategory = res.codename
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'subcategorygroup' && res.codename == 'view_subcategorygroup') {
    //       this.isSubcategoryGroup = res.codename
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'brands' && res.codename == 'view_brands') {
    //       this.isBrand = res.codename
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'color' && res.codename == 'view_color') {
    //       this.isColors = res.codename
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'size' && res.codename == 'view_size') {
    //       this.isSize = res.codename
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'tax' && res.codename == 'view_tax') {
    //       this.isTax = res.codename
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'taxslabs' && res.codename == 'view_taxslabs') {
    //       this.isTaxSlab = res.codename
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'productfeatures' && res.codename == 'view_productfeatures') {
    //       this.isFeature = res.codename
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'featuregroup' && res.codename == 'view_featuregroup') {
    //       this.isFeatureGroup = res.codename
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'hsncode' && res.codename == 'view_hsncode') {
    //       this.isHsnCode = res.codename
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'unit' && res.codename == 'view_unit') {
    //       this.isUnit = res.codename
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'unitconversion' && res.codename == 'view_unitconversion') {
    //       this.isUnitConversation = res.codename
    //     }
    //     //pos
    //    else if (res.content_type.app_label === 'pos' && res.content_type.model === 'posorder' && res.codename == 'view_posorder') {
    //     this.isPosOrder = res.codename;
    //   }
    //   //bank
    //   else if (res.content_type.app_label === 'pos' && res.content_type.model === 'receipt' && res.codename == 'view_receipt') {
    //     this.isReciept = res.codename;
    //   } else if (res.content_type.app_label === 'pos' && res.content_type.model === 'payments' && res.codename == 'view_payments') {
    //     this.isPurchasepos = res.codename;
    // console.log(this.isPurchasepos);
    //   } else if (res.content_type.app_label === 'pos' && res.content_type.model === 'expance' && res.codename == 'view_expance') {
    //     this.isExpence = res.codename;
    // console.log(this.isExpence);
    //   } else if (res.content_type.app_label === 'pos' && res.content_type.model === 'companybank' && res.codename == 'view_companybank') {
    //     this.isCompanyBank = res.codename;
    //   }
    //    // places
    //    else if (res.content_type.app_label === 'places' && res.content_type.model === 'city' && res.codename == 'view_city') {
    //     this.isCity = res.codename;
    //   }else if (res.content_type.app_label === 'places' && res.content_type.model === 'state' && res.codename == 'view_state') {
    //     this.isState = res.codename;
    //   }else if (res.content_type.app_label === 'places' && res.content_type.model === 'country' && res.codename == 'view_country') {
    //     this.isCountry = res.codename;
    //   }
    //    //website
    //    else if (res.content_type.app_label === 'website' && res.content_type.model === 'banner' && res.codename == 'view_banner') {
    //     this.isBanner = res.codename;
    // console.log(this.isBanner);
    //   } else if (res.content_type.app_label === 'website' && res.content_type.model === 'staticpages' && res.codename == 'view_staticpages') {
    //     this.isStaticPage = res.codename;
    // console.log(this.isStaticPage);
    //   } else if (res.content_type.app_label === 'website' && res.content_type.model === 'footerfeatures' && res.codename == 'view_footerfeatures') {
    //     this.isFooterpage = res.codename;
    // console.log(this.isFooterpage);
    //   } else if (res.content_type.app_label === 'website' && res.content_type.model === 'footer' && res.codename == 'view_footer') {
    //     this.isFooterList = res.codename;
    // console.log(this.isFooterList);
    //   } else if (res.content_type.app_label === 'product' && res.content_type.model === 'trandingproduct' && res.codename == 'view_trandingproduct') {
    //     this.isTrendingProducts = res.codename;
    // console.log(this.isTrendingProducts);
    //   } else if (res.content_type.app_label === 'product' && res.content_type.model === 'dealsoftheday' && res.codename == 'view_dealsoftheday') {
    //     this.isDealoftheDay = res.codename;
    // console.log(this.isDealoftheDay);
    //   } else if (res.content_type.app_label === 'order' && res.content_type.model === 'storeaddress' && res.codename == 'view_storeaddress') {
    //     this.isAddressStore = res.codename;
    // console.log(this.isAddressStore);
    //   } else if (res.content_type.app_label === 'product' && res.content_type.model === 'coupon' && res.codename == 'view_coupon') {
    //     this.isCouponList = res.codename;
    // console.log(this.isCouponList);
    //   } else if (res.content_type.app_label === 'order' && res.content_type.model === 'reason' && res.codename == 'view_reason') {
    //     this.isReason = res.codename;
    // console.log(this.isReason);
    //   } else if (res.content_type.app_label === 'website' && res.content_type.model === 'aboutbanner' && res.codename == 'view_aboutbanner') {
    //     this.isAboutBanner = res.codename;
    // console.log(this.isAboutBanner);
    //   } else if (res.content_type.app_label === 'website' && res.content_type.model === 'aboutfooterbanner' && res.codename == 'view_aboutfooterbanner') {
    //     this.isAboutFooterBanner = res.codename;
    // console.log(this.isAboutFooterBanner);
    //   } else if (res.content_type.app_label === 'website' && res.content_type.model === 'newarrivalsbanner' && res.codename == 'view_newarrivalsbanner') {
    //     this.isNewarrivalBanner = res.codename;
    // console.log(this.isNewarrivalBanner);
    //   } else if (res.content_type.app_label === 'product' && res.content_type.model === 'ratingandreviewsonproduct' && res.codename == 'view_ratingandreviewsonproduct') {
    //     this.isRatingReview = res.codename;
    // console.log(this.isRatingReview);
    //   }
    //    //settings
    //    else if (res.content_type.app_label === 'master' && res.content_type.model === 'paymentterms' && res.codename == 'view_paymentterms') {
    //     this.isPaymentTerms = res.codename;
    //   }else if (res.content_type.app_label === 'website' && res.content_type.model === 'financialyear' && res.codename == 'view_financialyear') {
    //     this.isFinancialYear = res.codename;
    //   }else if (res.content_type.app_label === 'auth' && res.content_type.model === 'group' && res.codename == 'view_group') {
    //     this.isGroup = res.codename;
    //   }else if (res.content_type.app_label === 'master' && res.content_type.model === 'user' && res.codename == 'view_user') {
    //     this.isUser = res.codename
    //   } else if (res.content_type.app_label === 'account' && res.content_type.model === 'additionalcharge' && res.codename == 'view_additionalcharge') {
    //     this.isAdditional = res.codename;
    //   }

    //   });

    // });

  }
// primary$ : string = '#FF9F43';
// secondary$ : string = '#1B2850';

logoData:LogoapiInterFase;
  pageLoadData(){
  this._auth.HoldLogoData$.subscribe({
      next : (value : LogoapiInterFase)=> {
        if(value && value.success){
         this.logoData = value;
          this.applyDynamicStyles('--secondary-color',value.data.secondary_colour)
          this.applyDynamicStyles('--primary-color',value.data.primary_colour);
          this.updateFavicon(this.api_url+value.data.favicon)
        }

      },
    })
  }
  applyDynamicStyles(var_name :string , values_of_var : string) {
    this.renderer.setStyle(document.documentElement,var_name ,values_of_var,RendererStyleFlags2.Important);

  }
updateFavicon(iconUrl: string): void {
    const favicon = this.renderer.selectRootElement('#dynamic-favicon', true);
    if (favicon) {
      this.renderer.setAttribute(favicon, 'href', iconUrl);
    }
  }

  LoadScript(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }

  // openSideBar(uiControl:string){
  //   this.sideBarControls.forEach((control: any)=>{
  //     if(uiControl===control.key){
  //       control.value=true
  //     }else{
  //       control.value=false
  //     }
  //   })
  // }

  // sideBarToggle(uiControl:string): void {
  //   this.sideBarControls.forEach((control: any)=>{
  //     if(uiControl===control.key){
  //       control.value=!control.value
  //     }else{
  //       control.value=false
  //     }
  //   })
  // }
}
