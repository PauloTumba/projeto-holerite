import { Routes } from '@angular/router';


// import { LoginComponent } from '../rotas/login/login.component';
// import { ListarComponent } from '../rotas/listar/listar.component';
import { OpcoesHoleriteComponent } from '../rotas/opcoes-holerite/opcoes-holerite.component';
import { ListarLixeirasComponent } from '../rotas/listar-lixeiras/listar-lixeiras.component';

// import { BarraLateralComponent } from '../components/barra-lateral/barra-lateral.component';

export const AdminRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    //  { path: 'login',   component: LoginComponent },
    // { path: 'listar',     component: ListarComponent },
    { path:'opcoes', component: OpcoesHoleriteComponent},
    {path: 'listar-lixeiras', component:ListarLixeirasComponent}
   
];
