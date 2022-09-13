import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './sample/demo/view/dashboard.component';
import {DashboardAnalyticsComponent} from './sample/demo/view/dashboardanalytics.component';
import {FormLayoutDemoComponent} from './sample/demo/view/formlayoutdemo.component';
import {FloatLabelDemoComponent} from './sample/demo/view/floatlabeldemo.component';
import {InvalidStateDemoComponent} from './sample/demo/view/invalidstatedemo.component';
import {PanelsDemoComponent} from './sample/demo/view/panelsdemo.component';
import {OverlaysDemoComponent} from './sample/demo/view/overlaysdemo.component';
import {MediaDemoComponent} from './sample/demo/view/mediademo.component';
import {MessagesDemoComponent} from './sample/demo/view/messagesdemo.component';
import {MiscDemoComponent} from './sample/demo/view/miscdemo.component';
import {EmptyDemoComponent} from './sample/demo/view/emptydemo.component';
import {ChartsDemoComponent} from './sample/demo/view/chartsdemo.component';
import {FileDemoComponent} from './sample/demo/view/filedemo.component';
import {DocumentationComponent} from './sample/demo/view/documentation.component';
import {AppMainComponent} from './sample/layout/main/app.main.component';
import {AppNotfoundComponent} from './sample/pages/app.notfound.component';
import {AppErrorComponent} from './sample/pages/app.error.component';
import {AppAccessdeniedComponent} from './sample/pages/app.accessdenied.component';
import {AppLoginComponent} from './sample/pages/app.login.component';
import {InputDemoComponent} from './sample/demo/view/inputdemo.component';
import {ButtonDemoComponent} from './sample/demo/view/buttondemo.component';
import {TableDemoComponent} from './sample/demo/view/tabledemo.component';
import {ListDemoComponent} from './sample/demo/view/listdemo.component';
import {TreeDemoComponent} from './sample/demo/view/treedemo.component';
import {IconsComponent} from './sample/utilities/icons.component';
import {AppCrudComponent} from './sample/pages/app.crud.component';
import {AppCalendarComponent} from './sample/pages/app.calendar.component';
import {AppTimelineDemoComponent} from './sample/pages/app.timelinedemo.component';
import {AppInvoiceComponent} from './sample/pages/app.invoice.component';
import {AppHelpComponent} from './sample/pages/app.help.component';
import {BlocksComponent} from './sample/blocks/blocks/blocks.component';
import {AppWizardComponent} from './sample/pages/app.wizard.component';
import {AppContactusComponent} from './sample/pages/app.contactus.component';
import {AppLandingComponent} from './sample/pages/app.landing.component';
import { AuthComponent } from './auth/auth.component';
import { SysMainComponent } from './layout/sys-main/sys.main.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', component: DashboardComponent},
                    {path: 'favorites/dashboardanalytics', component: DashboardAnalyticsComponent},
                    {path: 'uikit/formlayout', component: FormLayoutDemoComponent},
                    {path: 'uikit/floatlabel', component: FloatLabelDemoComponent},
                    {path: 'uikit/invalidstate', component: InvalidStateDemoComponent},
                    {path: 'uikit/input', component: InputDemoComponent},
                    {path: 'uikit/button', component: ButtonDemoComponent},
                    {path: 'uikit/table', component: TableDemoComponent},
                    {path: 'uikit/list', component: ListDemoComponent},
                    {path: 'uikit/tree', component: TreeDemoComponent},
                    {path: 'uikit/panel', component: PanelsDemoComponent},
                    {path: 'uikit/overlay', component: OverlaysDemoComponent},
                    {path: 'uikit/menu', loadChildren: () => import('./sample/demo/view/menus/menus.module').then(m => m.MenusModule)},
                    {path: 'uikit/media', component: MediaDemoComponent},
                    {path: 'uikit/message', component: MessagesDemoComponent},
                    {path: 'uikit/misc', component: MiscDemoComponent},
                    {path: 'uikit/charts', component: ChartsDemoComponent},
                    {path: 'uikit/file', component: FileDemoComponent},
                    {path: 'utilities/icons', component: IconsComponent},
                    {path: 'pages/crud', component: AppCrudComponent},
                    {path: 'pages/calendar', component: AppCalendarComponent},
                    {path: 'pages/timeline', component: AppTimelineDemoComponent},
                    {path: 'pages/invoice', component: AppInvoiceComponent},
                    {path: 'pages/help', component: AppHelpComponent},
                    {path: 'pages/empty', component: EmptyDemoComponent},
                    {path: 'documentation', component: DocumentationComponent},
                    {path: 'blocks', component: BlocksComponent},
                ]
            },
            {
                path: 'sys', component: SysMainComponent,
                children: []
            },
            {path: 'auth', component: AuthComponent},
            {path: 'pages/landing', component: AppLandingComponent},
            {path: 'error', component: AppErrorComponent},
            {path: 'access', component: AppAccessdeniedComponent},
            {path: 'notfound', component: AppNotfoundComponent},
            {path: 'login', component: AppLoginComponent},
            {path: 'wizard', component: AppWizardComponent},
            {path: 'contactus', component: AppContactusComponent},
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
