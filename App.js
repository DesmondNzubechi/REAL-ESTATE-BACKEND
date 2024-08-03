//APP.JS FILE
const express = require("express");
const propertyRoute = require('./routes/propertyRoute');
const landRoute = require('./routes/landRoute');
const reviewRoute = require('./routes/reviewRoute');
const userRoute = require('./routes/userRoute');
const orderRoute = require('./routes/orderRoute');
const activitiesRoute = require('./routes/activitiesRoute');
const blogRoute = require("./routes/blogRoute");
const AppError = require("./errors/appError");
const globalErrorHandler = require('./utils/errorController');
const app = express();


app.use(express.json())

// Test route to ensure basic functionality
app.get('/', (req, res) => {
    res.send('API is working');
});

//testing the middleware
app.use((req, res, next) => {
    console.log("Hello from the middleware")
    next();
});
 
//ALL ROUTES
app.use("/api/v1/properties", propertyRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/land", landRoute);
app.use("/api/v1/user", userRoute);
app.use('/api/v1/order', orderRoute);
app.use('/api/v1/activities', activitiesRoute);
app.use("/api/v1/blog", blogRoute);

app.all("*", (req, res, next) => {
    next(new AppError("this route does not exist", 404))
})
 
app.use(globalErrorHandler); 

module.exports = app;