import bcrypt from 'bcryptjs'
const saltRounds = 10;

export const encryptPassword = async (plainPassword) => {
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
};

export const checkPassword = async (plainPassword, hashedPassword) => {
  const isCorrectPassword = await bcrypt.compare(plainPassword, hashedPassword);
  return isCorrectPassword;
};

