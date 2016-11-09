import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],

  add(question) {
    if(!(this.includes(question))){
      this.get('questions').pushObject(question).save();
    }
  },
  includes(question) {
    return this.get('questions').includes(question);
  },
});
