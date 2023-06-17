import mongoose from "mongoose";
import { contactSchema } from "../models/crmModels";

const Contact = mongoose.model("contact", contactSchema);

export const addNewContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const contact = await newContact.save();
    res.json(contact);
  } catch (err) {
    res.send(err);
  }
};

export const getContact = async (req, res) => {
  try {
    const contact = await Contact.find({});
    res.json(contact);
  } catch (err) {
    res.send(err);
  }
};
export const getContactWithId = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.contactId);
    res.json(contact);
  } catch (err) {
    res.send(err);
  }
};
export const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req.params.contactId },
      req.body,
      { new: true }
    );
    res.json(contact);
  } catch (err) {
    res.send(err);
  }
};

export const deleteContact = async (req, res) => {
    try {
      await Contact.deleteOne({ _id: req.params.contactId });
      res.json({ message: "Successfully deleted contact" });
    } catch (err) {
      res.send(err);
    }
  };