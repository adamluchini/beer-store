import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('beer');
  },
  actions: {
    saveBeer(params){
      var newBeer = this.store.createRecord('beer', params);
      newBeer.save();
      this.transitionTo('admin');
    }
  }
});
