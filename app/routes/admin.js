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
    },
    deleteBeer(beer){
      beer.destroyRecord();
      this.transitionTo('admin');
    },
    edit(beer, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          beer.set(key,params[key]);
        }
      });
      beer.save();
      this.transitionTo('admin');
    }
  }
});
