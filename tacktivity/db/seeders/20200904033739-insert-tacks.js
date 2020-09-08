'use strict';

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tacks', [
      r({title: 'Good Doggo', description: "Doggo being goofy-good", url: 'https://unsplash.com/photos/09iA8GzINiI', tackImage: 'https://images.unsplash.com/photo-1590508292979-a30664cfdb51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80', userId: 1}),
      r({title: 'Hippo', description: "Big ol'hippos", url: 'https://unsplash.com/photos/x_JjEDstzdw', tackImage: 'https://images.unsplash.com/photo-1534995715352-2529f7058626?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1359&q=80', userId: 2}),
      r({title: 'Rabbittto', description: "Hip-hop, I say the hip-hip-HOP!", url: 'https://unsplash.com/photos/zXGv2SrdZfU', tackImage: 'https://images.unsplash.com/photo-1564650211163-21049f1b683a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80', userId: 3}),
      r({title: 'Chickenz, not dinner', description: "Chickadee and Chickadoo", url: 'https://unsplash.com/photos/hQV3s7J6eM4', tackImage: 'https://images.unsplash.com/photo-1546272989-40c92939c6c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1176&q=80', userId: 2}),
      r({title: 'Children of the candy', description: "They're just kids - don't be scared!!", url: 'https://unsplash.com/photos/DIZBFTl7c-A', tackImage: 'https://images.unsplash.com/photo-1509924603848-aca5e5f276d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', userId: 1}),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tacks', null, {});
  }
};
