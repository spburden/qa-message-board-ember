import Ember from 'ember';

export default Ember.Component.extend({
  qaCart: Ember.inject.service(),

  sortDefinition: ['answers.length:desc'],
  sortedQuestions: Ember.computed.sort('model.questions', 'sortDefinition'),

  mostPopularDefinition: ['answers.length:desc'],
  mostPopularQs: Ember.computed.sort('model.questions', 'mostPopularDefinition'),

  actions: {
    sortFilter(params) {
      this.set('sortDefinition', [params]);
    },
    faveQuestion(question) {
      this.get('qaCart').add(question);
    }
  }
});
