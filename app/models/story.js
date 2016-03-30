import DS from 'ember-data';

export default DS.Model.extend({
  headline: DS.attr(),
  author: DS.attr(),
  body: DS.attr(),
  image: DS.attr()
});
