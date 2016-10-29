import Ember from 'ember';

export default Ember.Component.extend({
  sortedAnswers: Ember.computed.sort('answers', 'sortDefinition'),
  sortDefinition: ['score:desc'],

  actions: {
   updateAnswer(answer, params) {
     this.sendAction('updateAnswer', answer, params);
   }
  }
});
