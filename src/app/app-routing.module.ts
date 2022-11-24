import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/hero/dashboard/dashboard.component';
import { HeroDetailComponent } from './pages/hero/hero-detail/hero-detail.component';
import { HeroesComponent } from './pages/heroes/heroes.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
];
//of 將物件轉成observable
@NgModule({
  // 把我們宣告的東西註冊到路由上面
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
