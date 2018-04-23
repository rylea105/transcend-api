console.log('No value for FOO yet:', process.env.FOO);

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
console.log('Now the value for FOO is:', process.env.DB_HOST,process.env.DB_USER);
console.log('Now the value for FOO is:', process.env.FOO);
