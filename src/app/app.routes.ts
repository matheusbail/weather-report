import { Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ForecastComponent } from './forecast/forecast.component';


export const routes: Routes = [{path:'', component: FooterComponent},
{path: 'forecast', component: ForecastComponent}
]

