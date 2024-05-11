/*import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jwtToken: string | null = null;

  constructor(public auth: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    this.auth.getAccessTokenSilently().subscribe(
      (token: string) => {
        this.jwtToken = token;
        console.log("JWT Token:", this.jwtToken);
      },
      error => {
        console.error("Error retrieving JWT token:", error);
      }
    );
  }

  logout(): void {
    this.auth.logout(); 
  }

  fetchData(): void {
    if (this.jwtToken) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.jwtToken}`
      });
      console.log('Headers:', headers); 
  
      this.http.get<any>('https://localhost:7207/api', { headers }).subscribe(
        response => {
          console.log('Data from backend:', response);
        },
        error => {
          console.error('Error fetching data:', error);
        }
      );
    } else {
      console.error('JWT token is not available.');
    }
  }
} */

import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jwtToken: string | null = null;

  constructor(public auth: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    this.auth.idTokenClaims$.subscribe((claims) => {
      console.log(claims);
      const token = claims?.__raw;
      if (token) {
        localStorage.setItem('jwt_token', token);
        this.jwtToken = token;
        console.log("JWT Token:", this.jwtToken);
      }
    },
    error => {
      console.error("Error retrieving JWT token:", error);
    });
  }    

  logout(): void {
    this.auth.logout(); 
  }

  fetchData(): void {
    if (this.jwtToken) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.jwtToken}`
      });
      console.log('Headers:', headers); 
  
      this.http.get<any>(environment.domain, { headers }).subscribe(
        response => {
          console.log('Data from backend:', response);
        },
        error => {
          console.error('Error fetching data:', error);
        }
      );
    } else {
      console.error('JWT token is not available.');
    }
  }
}
