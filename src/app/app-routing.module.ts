import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { RequestListComponent} from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { RequestlineComponent } from './request/requestline/requestline.component';
import { ReviewComponent } from './review/review.component';


const routes: Routes = [
{path: '', redirectTo: "/", pathMatch: "full"},
{path:'home', component:HomeComponent},

{path:'users/list', component:UserListComponent},
{path:'users/login', component:UserLoginComponent},
{path:'users/edit/:id', component:UserEditComponent},
{path:'users/create', component:UserCreateComponent},
{path:'users/detail/:id', component:UserDetailComponent},

{path:'vendors/list', component:VendorListComponent},
{path:'vendors/detail/:id', component:VendorDetailComponent},
{path:'vendors/create', component:VendorCreateComponent},
{path:'vendors/edit/:id', component:VendorEditComponent},

{path:'product/list', component:ProductListComponent},
{path:'product/detail/:id', component:ProductDetailComponent},
{path:'product/create', component:ProductCreateComponent},
{path:'product/edit/:id', component:ProductEditComponent},


{path:'request/list', component:RequestListComponent},
{path:'request/detail/:id', component:RequestDetailComponent},
{path:'request/create', component:RequestCreateComponent},
{path:'request/edit/:id', component:RequestEditComponent},
{path:'request/requestline/:id',component:RequestlineComponent},

{path:"requestline/create/:rid", component:RequestlineCreateComponent},
{path:"requestline/edit/:id", component:RequestlineEditComponent},

{path:"review/list", component:ReviewComponent},


{path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
