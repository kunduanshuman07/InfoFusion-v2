const logSuccess = (message) => {
    console.log(`info: ${message} api called status: 200`);
};

const logError = (message, err) => {
    console.error(`error: ${message} api called error: ${err.message}`);
};
export {
    logError, logSuccess
}
