const User = require('./User');
const Entry = require('./Entry');

User.hasMany(Entry, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Entry };