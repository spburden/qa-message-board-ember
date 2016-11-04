import Ember from 'ember';

export default Ember.Component.extend({
  qaCart: Ember.inject.service(),

  sortDefinition: ['answers.length:desc'],
  sortedQuestions: Ember.computed.sort('model.questions', 'sortDefinition'),

  actions: {
    sortFilter(params){
      this.set('sortDefinition', [params]);
    },
    faveQuestion(question){
      this.get('qaCart').add(question);
      console.log(this.get('qaCart.questions'));
    }
  }
});
