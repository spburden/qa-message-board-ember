import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateFormShow() {
      this.set('updateQuestionForm', true);
    },
    cancel() {
       this.set('updateQuestionForm', false);
    },
    updateQuestion(question) {
      var params = {
        details: this.get('details'),
        notes: this.get('notes'),
        author: this.get('author')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
