require('dotenv').config()

import User from "./models/User";
import Agent from "./models/Agent";
import Booking from "./models/Booking";

const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV !== 'test'

const dbInit = () => Promise.all([
    User.sync({ alter: isDev || isTest }),
    Agent.sync({ alter: isDev || isTest }),
    // Booking.sync({ alter: isDev || isTest }),
])

export default dbInit
