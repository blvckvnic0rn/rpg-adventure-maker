import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: `<router-outlet/>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {

}
