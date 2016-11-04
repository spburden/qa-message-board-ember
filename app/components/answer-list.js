import Ember from 'ember';

export default Ember.Component.extend({
  sortDefinition: ['score:desc'],
  sortedAnswers: Ember.computed.sort('answers', 'sortDefinition'),
  
  actions: {
   updateAnswer(answer, params) {
     this.sendAction('updateAnswer', answer, params);
   }
  }
});
