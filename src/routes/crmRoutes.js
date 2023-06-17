import {
  addNewContact,
  getContact,
  getContactWithId,
  updateContact,
  deleteContact,
} from "../controllers/crmControllers";

const routes = (app) => {
  app
    .route("/contact")
    // get all contacts
    .get((req, res, next) => {
      //middleware
      console.log(`request from ${req.originalUrl}`);
      console.log(`request type ${req.method}`);
      next();
    }, getContact)
    //post a new contact
    .post(addNewContact);

  app
    .route("/contact/:contactId")
    //get a specific contact
    .get(getContactWithId)
    //update a contact 
    .put(updateContact)
      //delete a contact 
    .delete(deleteContact);
};
export default routes;
