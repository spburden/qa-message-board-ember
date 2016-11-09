import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    toggleSidebar() {
      Ember.$('.ui.sidebar').sidebar('toggle');
    },
    saveQuestion(params) {
      this.store.createRecord('question', params);
      this.transitionTo('index');
    },
    goHome() {
      this.transitionTo('index');
    }
  }
});
