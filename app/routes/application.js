import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    toggleSidebar() {
      Ember.$('.ui.sidebar').sidebar('toggle');
    }
  }
});
