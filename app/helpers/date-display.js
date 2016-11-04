import Ember from 'ember';

export function dateDisplay(params/*, hash*/) {
  return moment(params[0]).fromNow();
}

export default Ember.Helper.helper(dateDisplay);
