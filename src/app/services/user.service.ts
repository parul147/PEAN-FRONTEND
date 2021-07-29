import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

createUser(this: any,  user: any){
  return this.http.post("http://localhost:8080/users",user);
}

updateUser(user: { firstname?: string; middlename?: string; Lastname?: string; email?: string; phoneNumber?: string; role?: string; address?: string; id?: any; }) {
  return this.http.put("http://localhost:8080/users/"+user.id,user)
}
 getUser() {
return this.http.get("http://localhost:8080/users");
}
deleteUser(user: { id: string; }) {
  return this.http.delete("http://localhost:8080/users/"+user.id)
}
}






