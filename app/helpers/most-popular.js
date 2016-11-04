import Ember from 'ember';

export function mostPopular(params/*, hash*/) {
  //console.log(params[0][0]);
  if(params[0][0] === params[1]) {
    return Ember.String.htmlSafe('<span class="mostPopular">MOST POPULAR!!!</span>');
  }
}

export default Ember.Helper.helper(mostPopular);
