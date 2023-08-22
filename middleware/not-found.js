const notFound = (req, res) => res.status(404).send("Route does't exist");

module.exports = notFound;
