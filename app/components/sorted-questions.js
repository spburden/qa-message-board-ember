import Ember from 'ember';

export default Ember.Component.extend({
  qaCart: Ember.inject.service(),
  actions: {
    faveQuestion(question) {
      this.get('qaCart').add(question);
    }
  }
});
