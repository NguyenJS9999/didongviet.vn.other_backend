const UserRepository = require("../repositories/user.repository");
const userRepository = new UserRepository();
module.exports = {
  get: (data) => {
    return userRepository.create(data);
  },
  login: (email, password) => {
    return;
  },
  register: (attributes = {}) => {
    return;
  },
  add: (data) => {
    return userRepository.create(data);
  },
};
