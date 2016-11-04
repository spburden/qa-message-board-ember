import Ember from 'ember';

export function bestAnswer(params/*, hash*/) {
  if(params[0][0] === params[1]) {
    return Ember.String.htmlSafe('<span class="mostPopular"> - (Best Answer)</span>');
  }
}

export default Ember.Helper.helper(bestAnswer);
