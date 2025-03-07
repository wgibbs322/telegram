import User from '../model/usermodel.js';
import TelegramBot from 'node-telegram-bot-api';

const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: false });

export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const message = `New user created: ${user.email}`;
    await bot.sendMessage('YOUR_CHAT_ID', message);
    res.send('User created successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};