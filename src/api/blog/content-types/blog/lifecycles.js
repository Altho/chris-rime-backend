const slugify = require("slugify");
const { nanoid } = require('nanoid')

const id = nanoid().toString()

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;

      data.slug = id;

  },
  async beforeUpdate(event) {

    const { data } = event.params;

      data.slug = id;

  },
};
