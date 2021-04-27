import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Providers
import { ApiConnectService } from './services/api-connect.services';
import { BFFService } from './services/bff.services';
import { AppRoutingModule } from './app-routing.module'
//Pages
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlertasComponent } from './pages/alertas/alertas.component';
import { OperadoresComponent } from './pages/operadores/operadores.component';
import { TransportesComponent } from './pages/transportes/transportes.component';
import { BahiasComponent } from './pages/bahias/bahias.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AlertasComponent,
    OperadoresComponent,
    TransportesComponent,
    BahiasComponent,
    ConfiguracionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    AppRoutingModule
  ],
  providers: [ApiConnectService, BFFService],
  bootstrap: [AppComponent]
})
export class AppModule { }
