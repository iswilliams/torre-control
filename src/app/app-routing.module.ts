import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlertasComponent } from './pages/alertas/alertas.component';
import { OperadoresComponent } from './pages/operadores/operadores.component';
import { TransportesComponent } from './pages/transportes/transportes.component';
import { BahiasComponent } from './pages/bahias/bahias.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component:DashboardComponent 
    },
    {
        path: 'alertas',
        component: AlertasComponent
    },
    {
        path: 'operadores',
        component: OperadoresComponent
    },
    {
        path: 'transportes',
        component: TransportesComponent
    },
    {
        path: 'bahias',
        component: BahiasComponent
    },
    {
        path: 'configuracion',
        component: ConfiguracionComponent
    }
    
    ];
    
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
export class AppRoutingModule { }