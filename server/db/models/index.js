const User = require('./user')
const Order = require('./order')
const Noodle = require('./noodle')
const Ingredient = require('./ingredient')

// one to many
User.hasMany(Order)
Order.belongsTo(User)

// many to many
Order.belongsToMany(Noodle, {through: 'orderItem'})
Noodle.belongsToMany(Order, {through: 'orderItem'})

// many to many
Noodle.belongsToMany(Ingredient, {through: 'noodleIngredient'})
Ingredient.belongsToMany(Noodle, {through: 'noodleIngredient'})

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Order,
  Noodle,
  Ingredient
}
