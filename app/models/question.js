import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  details: DS.attr(),
  notes: DS.attr(),
});
