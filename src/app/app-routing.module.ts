import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StandingsPageComponent } from './pages/standings-page/standings-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'standings', component: StandingsPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
