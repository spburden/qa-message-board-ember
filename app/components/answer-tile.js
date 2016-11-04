import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    upvote(answer) {
      var params = {
        score: answer.get('score') + 1
      };
      this.sendAction('updateAnswer', answer, params);
    },
    downvote(answer) {
      var params = {
        score: answer.get('score') - 1
      };
      this.sendAction('updateAnswer', answer, params);
    },
  
  }
});
