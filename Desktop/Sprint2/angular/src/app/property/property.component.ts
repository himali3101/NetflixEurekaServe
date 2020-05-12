import { Component, OnInit } from '@angular/core';
import { RealestateService } from '../realestate.service';
import { Router } from '@angular/router';
import { Property } from '../Property';
import { User } from '../User';
import { HttpEventType, HttpResponse, HttpClient } from '@angular/common/http';
import { Users } from '../Users';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  property : Property;
  user : Users;
/*
  title = 'File-Upload-Save';
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;
*/

  constructor( private router: Router, private service : RealestateService,private http : HttpClient) { }

  ngOnInit(): void {
  }

  addProperty(propertyType, room, budget, propertyStatus, areaPerSq, floorNo, location, locality, sellerName, sellerEmailId){
    this.property = new Property(propertyType, room, budget, propertyStatus, areaPerSq, floorNo, location, locality, sellerName, sellerEmailId);
    this.service.addProperty(this.property).subscribe( data => { this.property=data; alert("Property added successfully."+this.property.propertyId)})
  }

 /* downloadFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '_File_Saved_Path');
    link.setAttribute('download', 'file_name.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
    }
    change($event) {
    this.changeImage = true;
    }
    changedImage(event) {
    this.selectedFile = event.target.files[0];
    }
    upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.service.pushFileToStorage(this.currentFileUpload).subscribe(event => {
    if (event.type === HttpEventType.UploadProgress) {
    this.progress.percentage = Math.round(100 * event.loaded / event.total);
    } else if (event instanceof HttpResponse) {
    alert('File Successfully Uploaded');
    }
    this.selectedFiles = undefined;
    }
    );
    }
    selectFile(event) {
    this.selectedFiles = event.target.files;
    }*/
  
    selectedFile: File;
      retrievedImage: any;
      base64Data: any;
      retrieveResonse: any;
      message: string;
      imageName: any;
      //Gets called when the user selects an image
      public onFileChanged(event) {
        //Select File
        this.selectedFile = event.target.files[0];
      }
      //Gets called when the user clicks on submit to upload the image
      onUpload() {
        console.log(this.selectedFile);
        //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
        const uploadImageData = new FormData()
        uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
        //Make a call to the Spring Boot Application to save the image
        this.http.post('http://localhost:8888/property/uploadFile', uploadImageData, { observe: 'response' })
          .subscribe((response) => {
            if (response.status === 200) {
              this.message = 'Image uploaded successfully';
            } else {
              this.message = 'Image not uploaded successfully';
            }
          }
          );
        }
        //Gets called when the user clicks on retieve image button to get the image from back end
        getImage() {
        //Make a call to Sprinf Boot to get the Image Bytes.
        this.http.get(`http://localhost:8888/property/get/${this.imageName}`)
          .subscribe(
            res => {
              this.retrieveResonse = res;
              this.base64Data = this.retrieveResonse.picByte ;
              this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
            }
          );
  
      }

}
