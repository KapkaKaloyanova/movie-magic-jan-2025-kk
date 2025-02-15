import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET = '2b$10$YDyiUy5Esy4pQLuQFkG59f78e2273d180bd7d72';

export default {
    register(userData) {
        return User.create(userData);

    },

   async login(email, password){
        const user = await User.findOne({email});

            // check if user exists
            if (!user) {
                throw new Error('Invalid email or password!');
            };

            // check is password is correct
            const isValid = await bcrypt.compare(password, user.password);
            if (!isValid){
                throw new Error('Invalid email or password!');
            }
        
            // generate token
            const payload = {
                id: user.id,
                email: user.email,
            }
            // TODO: use async option
            const token = jwt.sign(payload, SECRET, { expiresIn: '2h' });
            
            // return token
            return token;

    }
}