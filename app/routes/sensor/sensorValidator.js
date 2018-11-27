const validateSensor = async (req) => {
    //TODO Add proper validation and database check
    if (!req.body.sensor_id) {
        const err = {
            statusCode: 500,
            messageTitle: 'Sensor not valid',
            message: `Sensor not valid`,
        };
        throw err;
    }
    req.payload = {
        success: true,
        message: 'Valid ID'
    };
};

module.exports = {
    validateSensor,
}