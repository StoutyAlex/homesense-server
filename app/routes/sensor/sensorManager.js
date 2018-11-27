
const registerData = async (req) => {
    console.log(req.body);
    req.payload = { success: true };
};

module.exports = {
    registerData,
}