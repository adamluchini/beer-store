import Ember from 'ember';

export default Ember.Component.extend({
  editListingForm: false,

  actions: {
    delete(beer){
      if (confirm('Delete this listing?')){
        this.sendAction('deleteBeer', beer);
      }
    },
    editListingForm(){
      this.set('editListingForm', true);
    },
    edit(beer){
      var params = {
        image: this.get('image'),
        brewery: this.get('brewery'),
        name: this.get('name'),
        style: this.get('style'),
        cost: this.get('cost'),
      };
      this.set('editListingForm', false);
      this.sendAction('edit', beer, params);
    }
  }
});
