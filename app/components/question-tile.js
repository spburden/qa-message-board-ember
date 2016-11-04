import Ember from 'ember';

export default Ember.Component.extend({
  sortDefinition: ['answers.length:desc'],
  sortedQuestions: Ember.computed.sort('model.questions', 'sortDefinition'),

  actions: {
    sortFilter(params){
      this.set('sortDefinition', [params]);
    },
  }
});
