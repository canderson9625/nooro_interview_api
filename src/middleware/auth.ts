const auth = {
    authentication: {},
    authorization: {},
};

export default (res, req, next) => {
    console.log("auth middleware");
    // jwts?
    next();
};
