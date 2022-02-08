import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoChatComponent } from './video-chat/video-chat.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  //{ path: '/', component: : DashboardComponent },
  { path: 'index', component: DashboardComponent },
  { path: 'videochat/:id', component: VideoChatComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
