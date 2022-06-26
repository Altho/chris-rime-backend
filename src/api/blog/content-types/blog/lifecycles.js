const { nanoid } = require('nanoid')


module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;



    data.slug = nanoid().toString();

  },
  async beforeUpdate(event) {

    const { data } = event.params;

      data.slug = nanoid().toString();

  },
};
