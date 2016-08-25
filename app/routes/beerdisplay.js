import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      beer: this.store.findRecord('beer', params.beer_id),
  });
},

actions: {
  saveComment(params) {
    var newComment = this.store.createRecord('comment', params);
    var beer = params.beer;
    beer.get('comments').addObject(newComment);
    newComment.save().then(function(){
      return beer.save();
    });
  },

  edit(beer, params){
    Object.keys(params).forEach(function(key){
      if(params[key]!==undefined){
        beer.set(key,params[key]);
        }
      });
    }
  }
});
