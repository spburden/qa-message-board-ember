import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
       this.set('addNewAnswer', true);
    },
    cancel() {
       this.set('addNewAnswer', false);
    },
    saveAnswer() {
      var params = {
        comment: this.get('comment'),
        author: this.get('author'),
        score: 0,
        question: this.get('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
      this.set('comment', '');
      this.set('question', '');
      this.set('author', '');
    }
  }
});
