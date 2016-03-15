import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    directives: [],
    template: `Hello World.`
})
class App {

};

bootstrap(App, []);
