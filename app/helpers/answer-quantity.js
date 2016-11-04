import Ember from 'ember';

export function answerQuantity(params/*, hash*/) {
  var quantity = params[0];
  console.log(quantity);
  if(quantity === 0){
    return Ember.String.htmlSafe('<span> There are no answers! <i class="fa fa-frown-o"></i></span>');
  }else if(quantity === 1) {
    return Ember.String.htmlSafe('<span> There is only 1 answer so far! <i class="fa fa-meh-o"></i></span>');
  } else if (quantity <= 3) {
    return Ember.String.htmlSafe('<span> There are ' + quantity + ' answers <i class="fa fa-smile-o"></i></span>');
  } else {
    return Ember.String.htmlSafe('<span> There are ' + quantity + ' answers <span class="glyphicon glyphicon-fire"></span> </span>');
  }
}

export default Ember.Helper.helper(answerQuantity);
