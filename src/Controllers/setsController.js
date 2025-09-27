const { getAllSetsFromService } = require("../Services/setItemService");
const getAllSets = () => {
  return getAllSetsFromService();
};

module.exports = { getAllSets };
