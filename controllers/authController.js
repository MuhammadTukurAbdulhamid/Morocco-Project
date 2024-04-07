const { createSendtoken } = require('../middlewares/auth');
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const signup = async (req, res) => {
  const { firstName, lastName, role, email, password } = req.body; // get the details of the body from user
  try {
    const user = await User.findOne({ email }); // find user by email

    if (user) {
      return res
        .status(400)
        .json({ message: 'User exist cant create', status: false }); // can't have the same with other user
    }

    if (!(firstName && lastName && role && email && password)) {
      res.status(400).json({ msg: 'Fill all fields', status: false });
    }

    const newUser = new User({
      // to create user
      firstName,
      lastName,
      role,
      email: email.toLowerCase(),
      password,
    });

    //Create salt and hash
    const salt = await bcrypt.genSalt(10);

    newUser.password = await bcrypt.hash(req.body.password, salt); // to hash the password

    const token = createSendtoken(newUser, res); // this will help with the creation of token

    await newUser.save(); // saved in the database
    res.status(200).json({
      user: {
        role,
        firstName,
        lastName,
        email,
        token,
      },
      status: true,
    });
  } catch (error) {
    // if there is error

    res.status(500).json({ message: error.message });
  }
};

// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res
        .status(400)
        .json({ msg: 'All input is required', status: false });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: 'User does not exist',
        status: false,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ msg: 'Invalid Credentials', status: false });
    }

    const token = createSendtoken(user, res);
    user.password = null;

    res.status(200).json({
      user: {
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token,
      },
      status: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllUsers = async function (req, res) {
  try {
    const all = await User.find({}).select('-password').sort({ createdAt: -1 });

    res.status(200).json({ data: all, success: true, error: null });
  } catch (error) {
    res.status(400).json({ error, success: false, data: null });
  }
};
module.exports = { signup, login, getAllUsers };
