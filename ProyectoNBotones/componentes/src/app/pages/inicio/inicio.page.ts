
import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
//crear una interface para definir propiedades que el componente lista va a tener
interface Componente {
    icon: string;
    name: string;
    redirectTo: string;
}
@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.page.html',
    styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
    //crear nuevo listado
    //componentes: any[] = [];
    componentes: Componente[] = [
        {
            icon: 'american-football-outline',
            name: 'Action Sheet',
            redirectTo: '/action-sheet'
        },
        {
            icon: 'alert-circle-outline',
            name: 'Alert',
            redirectTo: '/alert'
        },
        {
            icon: 'person-circle-outline',//icono de la figura de avatar
            name: 'Avatar',
            redirectTo: '/avatar'
        },
        {
            icon: 'calendar-outline',//icono de la figura de calendar
            name: 'Calendar',
            redirectTo: '/calendar'
        },
        {
            icon: 'create-outline',//icono de la figura de input
            name: 'Input',
            redirectTo: '/input'
        },
    ];
    constructor() { }
    ngOnInit() {
    }
}