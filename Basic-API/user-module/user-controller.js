const User = require('./user-model');

// GET user list
const getUserList = async (req, res) => {
    // http://localhost:3000/api/user-list
    try {
        const userList = await User.find();
        res.status(200).json({ success: true, data: { userList } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

// POST create new user
const createUser = async (req, res) => {
    // http://localhost:3000/api/create-user
    try {
        const userData = req.body;

        if (!userData) {
            return res.status(400).json({ success: false, error: 'Request body is empty' });
        }

        const newUser = await User.create(userData);
        res.status(201).json({ success: true, data: { user: newUser } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};


// PUT edit/update user by ID
const editUser = async (req, res) => {
    // http://localhost:3000/api/edit-user/65e4bc110ef394fc5ae19bd2
    try {
        const userId = req.params.id;
        const updatedUserData = req.body;

        // Check if the request body is empty
        if (!updatedUserData) {
            return res.status(400).json({ error: 'Request body is empty' });
        }

        // Update user by ID using the User model
        const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



// DELETE user by ID
const deleteUser = async (req, res) => {
// http://localhost:3000/api/delete-user/65e4bb6feebab54bce73a3b9
    try {
        const userId = req.params.id;

        // Delete the user by ID using the User model
        await User.findByIdAndDelete(userId);

        res.status(200).json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

module.exports = {
    getUserList,
    createUser,
    editUser,
    deleteUser
};
