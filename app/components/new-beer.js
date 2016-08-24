import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveBeer(){
      var params = {
        image: this.get('image'),
        brewery: this.get('brewery'),
        name: this.get('name'),
        style: this.get('style'),
        cost: this.get('cost')
      };
      this.sendAction('saveBeer', params);
    }
  }
});
