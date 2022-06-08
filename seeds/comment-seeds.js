const { Comment } = require('../models');

const commentData = [
  {
    id: 1,
    comment_text: "Wow! So that's what datatables are about. Thanks!",
    post_id: 1,
    user_id: 4
  },
  {
    id: 2,
    comment_text: "Datatables make my html tables beautiful. This is really helpful.",
    post_id: 1,
    user_id: 2
  },
  {
    id: 3,
    comment_text: "Thank you for your content, keep it coming!",
    post_id: 2,
    user_id: 3
  },
  {
    id: 4,
    comment_text: "Thank you for your input. I say they are similar.",
    post_id: 3,
    user_id: 2
  },
  {
    id: 5,
    comment_text: "I can ride my bike with no handlebars.",
    post_id: 3,
    user_id: 4
  },
  {
    id: 6,
    comment_text: "What is hashing? Is that weed? =P",
    post_id: 4,
    user_id: 2
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;