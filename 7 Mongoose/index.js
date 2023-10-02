const mongoose = require('mongoose');
const User = require('./User');

async function run() {
  try {
    await mongoose.connect('mongodb://localhost:27017/bookdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const user = new User({
      name: 'Harish',
      age: 24,
    });

    await user.save();
    console.log('User saved successfully:', user);
  } catch (error) {
    console.error('Error saving user:', error);
  } finally {
    // Close the connection when done
    mongoose.disconnect();
  }
}

run();
