import Ember from 'ember';

export function answerQuality(params/*, hash*/) {
  if(params[0] >= 3) {
    return Ember.String.htmlSafe('<span><i class="fa fa-thumbs-o-up"></i></span>');
  }
  if(params[0] < 0) {
    return Ember.String.htmlSafe('<span><i class="fa fa-thumbs-o-down"></i></span>');
  }
}

export default Ember.Helper.helper(answerQuality);
