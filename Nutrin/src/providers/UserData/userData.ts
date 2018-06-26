import { Injectable } from '@angular/core';


let userData_key_name = "userData";

@Injectable()
export class UserDataProvider {

  private user_data = {
    user : user,
    codigo: codigo,
    username : username,
    nome : nome,
    email: email,
    tipo: tipo
  }

  constructor() {
 
  }

  getUserData(): any{
    return localStorage.getItem(userData_key_name) || {user : false};
  }

  setUserData(user: boolean, codigo: number, username: string, nome: string, email: string, tipo: string){
    let user_data = {
      user : user,
      codigo: codigo,
      username : username,
      nome : nome,
      email: email,
      tipo: tipo
    }

    localStorage.setItem(userData_key_name, JSON.stringify(user_data));
  }
}