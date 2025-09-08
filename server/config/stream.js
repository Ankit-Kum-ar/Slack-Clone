const { StreamChat } = require('stream-chat');
const { STREAM_API_KEY, STREAM_API_SECRET } = require('./env');

const streamClient = StreamChat.getInstance(STREAM_API_KEY, STREAM_API_SECRET);

const upsertStreamUser = async (userData) => {
    try {
        await streamClient.upsertUser(userData);
        console.log('Stream user upserted successfully:', userData.id);
        return userData;
    } catch (error) {
        console.error('Error upserting Stream user:', error);
    }
}

const deleteStreamUser = async (userId) => {
    try {
        await streamClient.deleteUser(userId, { mark_messages_deleted: true });
        console.log('Stream user deleted successfully:', userId);
    } catch (error) {
        console.error('Error deleting Stream user:', error);
    }
} 

const generateStreamToken = (userId) => {
    try {
        const userIdStr = userId.toString();
        return streamClient.createToken(userIdStr);
    } catch (error) {
        console.error('Error generating Stream token:', error);
        return null;
    }
}

module.exports = {
    streamClient,
    upsertStreamUser,
    deleteStreamUser,
    generateStreamToken
};