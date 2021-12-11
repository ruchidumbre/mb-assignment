import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { RestApiService } from 'src/app/service/rest-api.service';
import { empModal } from './emp.modal';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public display;

  formValue !: FormGroup; // initaliseing form value with from group
  public empData: any = [];
  public popOps: any;
  options: AnimationOptions = {
    path: '/assets/noemp.json',
  };
  empModalObj: empModal = new empModal;
  constructor(public formbuilder: FormBuilder, public restApi: RestApiService) {
    this.display = "none";



  }

  ngOnInit() {
    this.formValue = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      address: [''],
      mobile: [''],
      dob: [''],
      city: [''],
    });

    this.getAllEmployeeData();

  }

  /**
   * To open employee details form
   * @param type 
   * @param data 
   */

  openModal(type: any, data?: any) {
    this.display = "block";
    switch (type) {
      case 'edit':
        this.popOps = 'edit';
        this.empModalObj.id = data.id;
        this.formValue.controls['firstName'].setValue(data.firstName);
        this.formValue.controls['lastName'].setValue(data.lastName);
        this.formValue.controls['email'].setValue(data.email);
        this.formValue.controls['dob'].setValue(data.dob);
        this.formValue.controls['address'].setValue(data.address);
        this.formValue.controls['city'].setValue(data.city);
        this.formValue.controls['mobile'].setValue(data.mobile);
        break;

      case 'add':
        this.popOps = 'add';
        this.empModalObj.id = 0;
        this.formValue.reset();
        break;
    }
  }

  /**
   * To close opened popup
   */
  onCloseHandled() {
    this.display = "none";
  }

  /**
   * GEt list of all added employees
   */
  getAllEmployeeData() {
    this.restApi.getData().subscribe((resp) => {
      this.empData = resp;
    })

  }

  /**
   * To update employee details on json server
   */
  updateEmp() {

    this.empModalObj.firstName = this.formValue.value.firstName;
    this.empModalObj.lastName = this.formValue.value.lastName;
    this.empModalObj.email = this.formValue.value.email;
    this.empModalObj.address = this.formValue.value.address;
    this.empModalObj.city = this.formValue.value.city;
    this.empModalObj.dob = this.formValue.value.dob;
    this.empModalObj.mobile = this.formValue.value.mobile
    this.restApi.editEmpDetails(this.empModalObj, this.empModalObj.id).subscribe((resp) => {
      this.formValue.reset();
      this.onCloseHandled();
      alert("Employee updated successfully !");
      this.getAllEmployeeData();
    }, (err) => {
      alert("Something went wrong, Pls try again");
    })

  }

  /**
   * To add new employee
   */
  addNewEmp() {

    this.empModalObj.firstName = this.formValue.value.firstName;
    this.empModalObj.lastName = this.formValue.value.lastName;
    this.empModalObj.email = this.formValue.value.email;
    this.empModalObj.address = this.formValue.value.address;
    this.empModalObj.city = this.formValue.value.city;
    this.empModalObj.dob = this.formValue.value.dob;
    this.empModalObj.mobile = this.formValue.value.mobile;
    this.restApi.postData(this.empModalObj).subscribe(resp => {
      console.log(resp);
      this.formValue.reset();
      this.onCloseHandled();
      alert("Emp added successfully !");
      this.getAllEmployeeData();
    }, (err) => {
      alert("Something went wrong, Pls try again");
    }
    )

  }

  /***
   * To delete selected employee
   */
  deleteEmp(data: any) {

    if (confirm("Are you sure to delete ?")) {
      this.restApi.deleteEmp(data.id).subscribe((resp) => {
        alert("Employee deleted successfully !");
        this.getAllEmployeeData();

      }, (err) => {
        alert("Something went wrong, Pls try again");
      })
    }


  }

}
