import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudentModule } from './student/student.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherModule } from './teacher/teacher.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandleService } from './error-handle.service';
import { ErrorInterceptor } from './error.interceptor';
import { RouterModule } from '@angular/router';
import { AppState, AuthModule, RedirectLoginOptions } from '@auth0/auth0-angular';
import { MatPaginatorModule } from '@angular/material/paginator';
import { environment } from '../environments/environment.development';
import { AuthService } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    TeacherModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    RouterModule, 
    MatPaginatorModule,
    AuthModule.forRoot({
      domain: environment.auth.domain,
      clientId: environment.auth.clientId,
      authorizationParams: {
        redirect_uri: environment.auth.redirectUri,
      }
      
    }),
    
    
    
    
  ],

  providers: [provideAnimations(), provideToastr(),
    ErrorHandleService, 
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthService
    
  ],
  bootstrap: [AppComponent], 
  
})
export class AppModule { }
