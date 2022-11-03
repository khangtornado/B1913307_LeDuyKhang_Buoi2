exports.create = (req, res) => {
    res.send({ message: "create handler" });
};

exports.findAll = (req, res) => {
    res.send({ message: "FindAll handler" });
};

exports.FindOne = (req, res) => {
    res.send({ message: "FindOne handler" });
};

exports.update = (req, res) => {
    res.send({ message: "update handler" });
};

exports.delete = (req, res) => {
    res.send({ message: "delete handler" });
};

exports.deleteAll = (req, res) => {
    res.send({ message: "eleteAll handler" });
};

exports.FindAllFavorite = (req, res) => {
    res.send({ message: "FindAllFavorite handler" });
};