import DS from 'ember-data';

export default DS.Model.extend({
  comment: DS.attr(),
  beer: DS.belongsTo('beer', {async: true})
});
