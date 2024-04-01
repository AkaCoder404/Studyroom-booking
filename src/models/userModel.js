const db = require('../services/database');

// 用户模型
class UserModel {
    static async findAll() {
        const [users] = await db.query('SELECT * FROM users');
        return users;
    }

    static async findByUsername(username) {
        const [user] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
        return user[0];
    }

    static async findById(id) {
        const [user] = await db.query('SELECT user_id, username, email, role FROM users WHERE user_id = ?', [id]);
        return user[0];
    }
    // Add more methods to create, update, delete users...
}

module.exports = UserModel;