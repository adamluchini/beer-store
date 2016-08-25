import Ember from 'ember';

export default Ember.Component.extend({
  editBeerForm: false,

  actions: {
    showEditBeer(){
      this.set('editBeerForm', true);
    },
    edit(beer){
      var params = {
        image: this.get('image'),
        brewery: this.get('brewery'),
        name: this.get('name'),
        style: this.get('style'),
        cost: this.get('cost'),
      };
      this.set('editBeerForm', false);
      this.sendAction('edit', beer, params);
    }
  }
});
