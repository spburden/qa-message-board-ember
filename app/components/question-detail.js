import Ember from 'ember';

export default Ember.Component.extend({
  qaCart: Ember.inject.service(),

  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
       this.sendAction('destroyQuestion', question);
      }
    },
    faveQuestion(question) {
      this.get('qaCart').add(question);
    }
  }
});
