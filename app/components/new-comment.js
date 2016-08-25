import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,

  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
      var params = {
        comment: this.get('comment'),
        beer: this.get('beer')
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
