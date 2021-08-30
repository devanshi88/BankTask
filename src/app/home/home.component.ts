import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedBankIndex="";
  bankSelected:any;
  selectBankName: any;
  bankCode: any;
  IFSCCode: any;
  authMethod: any;

  

  constructor() { }

  banks:any=[
    {id:0,bankcode:"UTIB",Name:"Axis Bank",IFSC_Code:"UTIB0000248",auth:"netbanking"},
    {id:1,bankcode:"HDFC",Name:"HDFC Bank",IFSC_Code:"HDFC0999999",auth:"debitcard"},
    {id:2,bankcode:"ICIC",Name:"ICICI Bank",IFSC_Code:"ICIC0TREA00",auth:"debitcard"},
    {id:3,bankcode:"ANDB",Name:"Andhra Bank",IFSC_Code:"ANDB0TRESUY",auth:"netbanking"},
    {id:4,bankcode:"AUBL",Name:"AU Small Finance Bank",IFSC_Code:"AUBL0000001",auth:"netbanking"},
    {id:5,bankcode:"BARB_R",Name:"Bank of Baroda",IFSC_Code:"BARB0TREASU",auth:"netbanking + debitcard"},
    {id:6,bankcode:"MAHB",Name:"Bank of Maharashtra",IFSC_Code:"MAHB0003007",auth:"netbankin + debitcard"},
  ];

  ngOnInit(): void {
  }
  getBankValue(val:any){
    console.log(val)
    let selectedBankIndex = val.target.value;
    this.selectBankName = this.banks[selectedBankIndex].Name
    this.bankCode = this.banks[selectedBankIndex].bankcode
    this.IFSCCode = this.banks[selectedBankIndex].IFSC_Code
    this.authMethod = this.banks[selectedBankIndex].auth
  }

  

}
