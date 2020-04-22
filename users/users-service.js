module.exports = {
  validate,
};

function validate(user) {
  if (user.username && user.password) return true;
  return false;
}
