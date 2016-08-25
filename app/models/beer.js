import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  brewery: DS.attr(),
  name: DS.attr(),
  style: DS.attr(),
  cost: DS.attr(),
  comments: DS.hasMany('comment', {async: true}),
  rating: DS.attr(),
});
