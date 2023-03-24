import { Component,OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
products:any=[

//   {
// title:"productA"
// },
// {
//   title:"productB"
// },
// {
//   title:"productC"
// }
];
productUnselectedIcon="favorite_outlined"
constructor(private srv:ProductService,private router:Router){   //private makes it to be available within the class only

}
ngOnInit(): void {    //to capture data be4 class is loaded;after the component is loaded but view is not rendered
  console.log("iam executed by angular whenever the component is initialized")
  this.getAllProducts();
}
ngAfterViewInit(){
  console.log("iam executed by angular after the html(home.comp.html) is executed");
  
}
getAllProducts(){
  this.srv.all().subscribe(   //subscribe is a way of waiting for an asynchronous call,similar to then in react
 {
  next:(res)=>{
    console.log("iam executed on success");
     console.log(res);
     this.products=res;
      
      
  },
  error:()=>{
    console.log("iam executed on error");
  },
  complete:()=>{
    console.log("iam executed on success or error");
  }
 }
 
//  (res)=>{      //old method of subscribe.we always define success in res
//   console.log(res)
//  },
//  (err)=>{

//  }
 
  )
}
toggleProductSelection(event:any,product:any){
  //alert("icon component clicked")
  product.selected=!product.selected
}
selectionIcon(product:any){
  // if(product.selected){
  //     return "favorite";
  // }
  // else{
  //   return "favorite_outlined";
  // }
return product.selected?"favorite":"favorite_outlined";
}
formatPrice(price:any){
  return '$'+price.toFixed(2)
}
onEditClicked(event:any,product:any){
this.router.navigateByUrl("/product/"+product._id)
}
}
