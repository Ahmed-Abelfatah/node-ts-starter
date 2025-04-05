import dotenv from 'dotenv';
dotenv.config();
console.log(
  '🏗️  👷👷 Your project starts from here welcome nodejs ts starter 👷👷 🏗️'
);
console.log(`
    ✅ husky
    ✅ eslint
    ✅ prettier
    ✅ jest
    ✅ docker
    ✅ gitlab pipeline setup
    ✅ dotenv
    ✅ (dev,production,test,lint) scripts
`);

const ENV_VAR =
  process.env.TEST_VAR ||
  'create a .env file 🔨, create new variable TEST_VAR 🔨 inside it and assign any value to it 🤔🤔🤔🤔';
console.log('Welcome to NodeJS typescript starter !!', ENV_VAR);
console.log('\n🚀🚀🚀🚀🚀 happy coding 🚀🚀🚀🚀🚀');
