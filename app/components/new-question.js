import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
       this.set('addNewQuestion', true);
    },
    cancel() {
       this.set('addNewQuestion', false);
    },
    saveQuestion() {
      var params = {
        details: this.get('details'),
        notes: this.get('notes'),
        author: this.get('author'),
        date: new Date().getTime()
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
