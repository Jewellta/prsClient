import { Pipe, PipeTransform } from '@angular/core';
import {Vendor} from './vendor.class'
@Pipe({
  name: 'searchVendor'
})
export class SearchVendorPipe implements PipeTransform {

  transform(vendors: Vendor[],searchCriteria: string): Vendor[] {
   let selectedVendors: Vendor[]=[];
   if(searchCriteria.length==0){
    return vendors;
  }
for(let vendor of vendors){
  if(vendor.id.toString().includes(searchCriteria.toLowerCase())
  || vendor.code.toLowerCase().includes(searchCriteria.toLocaleLowerCase())
  || vendor.name.toLowerCase().includes(searchCriteria.toLocaleLowerCase())
  || vendor.address.toLowerCase().includes(searchCriteria.toLocaleLowerCase())
  || vendor.city.toLowerCase().includes(searchCriteria.toLocaleLowerCase())
  || vendor.state.toLowerCase().includes(searchCriteria.toLocaleLowerCase())
  || vendor.zip.toLowerCase().includes(searchCriteria.toLocaleLowerCase())
  ||(vendor.email != null&&
    vendor.email.toLowerCase().includes(searchCriteria.toLocaleLowerCase()))
    ||(vendor.phone != null&&
    vendor.phone.toLowerCase().includes(searchCriteria.toLocaleLowerCase()))
  ) {
  selectedVendors.push(vendor);
  }
}
return selectedVendors;
  }
}