import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');

  this.route('people', function() {
    this.route('register');
    this.route('list');
  });

  this.route('tool', function() {
    this.route('calculator');
  });
});

export default Router;
