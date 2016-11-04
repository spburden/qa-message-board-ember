import Ember from 'ember';

export default Ember.Component.extend({
  science: false,
  sports: false,
  wholeList: true,

  qaCart: Ember.inject.service(),

  sortDefinition: ['answers.length:desc'],
  sortedQuestions: Ember.computed.sort('model.questions', 'sortDefinition'),

  mostPopularDefinition: ['answers.length:desc'],
  mostPopularQs: Ember.computed.sort('model.questions', 'mostPopularDefinition'),
  scienceSort: Ember.computed.filter('sortedQuestions', function(question) {
    if (question.data.category === "Science"){
        return question;
    }
  }),
  sportsSort: Ember.computed.filter('sortedQuestions', function(question) {
    if (question.data.category === "Sports"){
        return question;
    }
  }),

  actions: {
    sortFilter(params) {
      if(params === "sports"){
        this.set('wholeList', false);
        this.set('science', false);
        this.set('sports', true);
      } else if(params === "science"){
        this.set('wholeList', false);
        this.set('science', true);
        this.set('sports', false);
      } else {
        this.set('sortDefinition', [params]);
        this.set('wholeList', true);
        this.set('science', false);
        this.set('sports', false);
      }
    },
    faveQuestion(question) {
      this.get('qaCart').add(question);
    }
  }
});
