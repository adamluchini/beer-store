import Ember from 'ember';

export default Ember.Service.extend({
  beers: [],

  add(beer){
    this.get('beers').pushObject(beer);
  }
});
