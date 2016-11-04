import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  details: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', { async: true }),
  date: DS.attr(),
  category: DS.attr()
});
