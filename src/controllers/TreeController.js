const httpStatus = require("http-status");
// const logger = require("../config/logger");
const SynonimService = require("../service/SynonimService");
const TreeLocService = require("../service/TreeLocService");
const TreeService = require("../service/TreeService");

class TreeController {
  constructor() {
    this.treeLocService = new TreeLocService();
    this.synonimService = new SynonimService();
    this.treeService = new TreeService();
  }

  getTree = async (req, res) => {
    try {
      const tree = await this.treeService.getTree(req.params.id);
      res.status(tree.statusCode).json(tree.response);
    } catch (e) {
      // logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  getAllTree = async (req, res) => {
    try {
      const tree = await this.treeService.getAllTree();
      res.status(tree.statusCode).json(tree.response);
    } catch (e) {
      // logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  verifyQr = async (req, res) => {
    try {
      const tree = await this.treeService.verifyQr(req.params.uuid);
      res.status(tree.statusCode).json(tree.response);
    } catch (e) {
      // logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  checkLocation = async (req, res) => {
    try {
      const tree = await this.treeLocService.checkLocation(req.params.locId);
      res.status(tree.statusCode).json(tree.response);
    } catch (e) {
      // logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };
}

module.exports = TreeController;
