/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE BuyerControllerGenerated.js PLEASE EDIT ../BuyerController.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
import Properties from "../../../properties";
import BuyerModel from "../../../models/ShopTayo_db/BuyerModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import BuyerController from "../BuyerController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/buyer`;
    router.post(baseUrl + "", authorize([]), BuyerController.create);
    router.delete(baseUrl + "/:id", authorize([]), BuyerController.delete);
    router.get(baseUrl + "/findBy_buyerTransaction/:key", authorize([]), BuyerController.findBy_buyerTransaction);
    router.get(baseUrl + "/:id", authorize([]), BuyerController.get);
    router.get(baseUrl + "", authorize([]), BuyerController.list);
    router.post(baseUrl + "/:id", authorize([]), BuyerController.update);
    router.post(baseUrl + "/:id/validate", BuyerController.validate);
  },


  // CRUD METHODS


  /**
  * BuyerModel.create
  *   @description CRUD ACTION create
  *
  */
  create: async (req, res) => {
    try {
      const result = await BuyerModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * BuyerModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  delete: async (req, res) => {
    try {
      const result = await BuyerModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * BuyerModel.findBy_buyerTransaction
  *   @description CRUD ACTION findBy_buyerTransaction
  *   @param Objectid key Id of model to search for
  *
  */
  findBy_buyerTransaction: async (req, res) => {
    try {
      const result = await BuyerModel.findBy_buyerTransaction(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * BuyerModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  get: async (req, res) => {
    try {
      const result = await BuyerModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * BuyerModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await BuyerModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * BuyerModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  update: async (req, res) => {
    try {
      const result = await BuyerModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
    
  
  // Custom APIs

  /**
  * BuyerModel.validate
  *   @description Validates buyer
  *   @param Number id id of the buyer
  *   @returns Boolean
  *
  */
  validate: async (req, res) => {
    try {
      res.json({});
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },

};

export default generatedControllers;