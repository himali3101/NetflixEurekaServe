import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from './Profile';
import { Property } from './Property';
import { User } from './User';
import { PropertySellModel } from './PropertySellModel';
import { SignUpModel } from './login/signUpModel';
//import { PropertySell } from './PropertyModel';

@Injectable({
  providedIn: 'root'
})
export class RealestateService {

  

  constructor(private http : HttpClient) { }

  zuulurl =  'http://localhost:8888'

  baseurl = 'http://localhost:9002/login';

  baseurl1 = 'http://localhost:9003'

  propertyurl = 'http://localhost:9005'

  analysisurl = 'http://localhost:9099'

  buyorsellurl = 'http://localhost:9009'
  
  public login( userName : string , password : string) : Observable<boolean>{
    return this.http.get<boolean>(`${this.zuulurl}/login/${userName}/${password}`);
  }

  public signup(signUpModel) {
    return this.http.post( this.zuulurl+'/login/signup', signUpModel);
  }

  public createProfile( user : Profile) : Observable<Profile>{
    return this.http.post<Profile>(this.baseurl1+'/profile/create', user);
  }

  public viewProfile() : Observable<Profile[]>{
    return this.http.get<Profile[]>(`http://localhost:9003/profile/display`);
  }

  public updateProfile( user : Profile) : Observable<Profile>{
    return this.http.post<Profile>(this.baseurl1+'/profile/update', user);
  }
  
  public addProperty( property : Property) : Observable<Property>{
    return this.http.post<Property>(this.propertyurl+'/property/', property);
  }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    let data : FormData = new FormData();
    data.append('file', file, file.name);
    const newRequest = new HttpRequest('POST', 'http://localhost:8888/property/savefile)', data);
    return this.http.request(newRequest);

   // return this.http.post<HttpEvent<{}>>('http://localhost:9005/property/savefile',data);

    }


  public searchById( propertyId : number) : Observable<Property>{
    return this.http.get<Property>(`${this.propertyurl}/property/searchbyid/${propertyId}` )
  }

  public searchByLocation( location : string) : Observable<Property[]>{
    return this.http.get<Property[]>(`${this.propertyurl}/property/searchbylocation/${location}` )
  }

  public searchByType( propertyType : string) : Observable<Property[]>{
    return this.http.get<Property[]>(`${this.propertyurl}/property/searchbytype/${propertyType}` )
  }

  public searchByBudget( budget : number) : Observable<Property[]>{
    return this.http.get<Property[]>(`${this.propertyurl}/property/searchbybudget/${budget}` )
  }

  public locationAnalysis() : Observable<PropertySellModel[]>{
    return this.http.get<PropertySellModel[]>(`${this.analysisurl}/analysis/data` );
  }

  public SoldLocationAnalysis(analysisData) {
  return this.http.post(this.analysisurl+'/analysis/storedata', analysisData )
}

public sold( propertysold : PropertySellModel) : Observable<PropertySellModel>{
  return this.http.post<PropertySellModel>(this.zuulurl+'/buyorsell/add', propertysold)
}


}