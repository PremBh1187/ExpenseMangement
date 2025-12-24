const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolbe(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;