import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FullComponent } from "./full/full.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    },
    {
        path:'',
        component : FullComponent,
        children: [
            {
                path: '',
                loadChildren : () => import('./dashboard/dashboard.module').then( m => m.DashboardModule)
            }
        ]
        
    }

]



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }