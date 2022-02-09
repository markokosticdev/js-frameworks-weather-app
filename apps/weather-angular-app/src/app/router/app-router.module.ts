import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from "./routes";

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRouterModule {
}
