//聊天细心模型
const mongoose = require('mongoose')

var chatSchema = new mongoose.Schema({
    createTime: { type: Date, default: Date.now, index: true },

    from: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users',
    },
    to: {
        type: String,
        index: true,
    },
    type: {
        type: String,
        enum: ['text', 'image', 'code', 'invite'],
        default: 'text',
    },
    content: {
        type: String,
        default: '',
    },
  },{
      versionKey:false
  });

  const chatdata = mongoose.model('chats',chatSchema)

  module.exports =chatdata

