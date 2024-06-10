/* import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {} */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; // 1. Importa HttpClientModule

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule  // 2. Añade HttpClientModule aquí
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }

/*
Detalles de los cambios realizados:

1. Importar HttpClientModule:
  import { HttpClientModule } from '@angular/common/http';
  - Motivo del cambio: Para poder usar HttpClient en tus servicios, necesitas importar HttpClientModule en tu módulo principal (AppModule). HttpClientModule provee todas las funcionalidades necesarias para hacer solicitudes HTTP.

2. Agregar HttpClientModule a la lista de imports:
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
     HttpClientModule  // Añade HttpClientModule aquí
  ]
  - Motivo del cambio: Al incluir HttpClientModule en la lista de imports, estás registrando todos los servicios relacionados con HTTP en el inyector de dependencias de Angular. Esto permite que HttpClient esté disponible para ser inyectado en cualquier servicio que lo necesite.
  
Por qué es necesario:
- Cuando Angular encuentra la declaración `import { HttpClientModule } from '@angular/common/http';` pero no está incluido en los imports del @NgModule, los servicios que dependen de HttpClient no pueden ser inyectados correctamente, resultando en un error `NullInjectorError`. Incluir HttpClientModule en los imports asegura que Angular registre el módulo y sus proveedores, haciendo disponible HttpClient en toda la aplicación.
*/

