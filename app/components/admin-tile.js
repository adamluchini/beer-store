import Ember from 'ember';

export default Ember.Component.extend({
  editBeerForm: false,

  actions: {
    delete(beer){
      if (confirm('Delete this listing?')){
        this.sendAction('deleteBeer', beer);
      }
    },
  }
});
