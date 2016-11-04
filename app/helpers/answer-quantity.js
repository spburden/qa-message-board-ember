import Ember from 'ember';

export function answerQuantity(params/*, hash*/) {
  var quantity = params[0];
  console.log(quantity);
  if(quantity === 1) {
    return Ember.String.htmlSafe('<span> There is only 1 answer so far!</span>');
  } else if (quantity <= 3) {
    return Ember.String.htmlSafe('<span> There are ' + quantity + ' answers </span>');
  } else {
    return Ember.String.htmlSafe('<span> There are ' + quantity + ' answers <span class="glyphicon glyphicon-fire"></span> </span>');
  }
}

export default Ember.Helper.helper(answerQuantity);
