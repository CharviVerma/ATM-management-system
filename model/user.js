
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
	{
		FullName: { type: String, required: true },
		PhoneNumber: { type: String, required: true, unique: true },
        Address: { type: String, required: true },
        CardNumber: { type: String, required: true, unique: true },
        Pin: { type: String, required: true,  minlength: 4, maxlength: 4, trim: true,},
        Gender: { type: String, required: true, default: null, possibleValues: ['Male', 'Female']}

	},
	{ collection: 'users' }
)

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model