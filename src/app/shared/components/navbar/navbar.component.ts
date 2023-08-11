import { Component } from '@angular/core';
import { Link } from '../../models/link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  links : Link[] = [
     { title : 'Accueil', url : '/'},
     { title : 'Les Demos', url : '/demo', isVisible : false, children : [
      { title : 'Demo 1 : Les Bindings', url : '/demo/demo1' },
      { title : 'Demo 2 : Les Pipes', url : '/demo/demo2'},
      { title : 'Demo 3 : Les Directives', url : '/demo/demo3'},
      { title : 'Demo 4 : Input & Output', url : '/demo/demo4'},
      { title : 'Demo 5 : Les services', url : '/demo/demo5'},
      { title : 'Demo 6 : Les formulaires', url : '/demo/demo6'}
     ]},
     { title : 'Les Exos', url : '/exo', isVisible : false, children : [
      { title : 'Exo 1 : Le Timer', url : '/exo/exo1'},
      { title : 'Exo 2 : La Shopping List V1', url : '/exo/exo2'},
      { title : 'Exo 3 : La shopping List V2', url : '/exo/exo3'}
     ]}
   ];

  //  display(link : Link) : void {
  //     link.isVisible = !link.isVisible;
  //     this.links.forEach(l => {
  //       if(l != link) {
  //         l.isVisible = false;
  //       }
  //     });
  //  }

  display(link : Link) : void {
    let wasVisible = link.isVisible;
    for(let i=0; i< this.links.length; i++) {
      this.links[i].isVisible = false;
    }
    link.isVisible = !wasVisible;
  }
}
