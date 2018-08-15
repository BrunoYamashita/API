const express = require('express');
const bookService = require('../services/book');
let router = express.Router();

/**
 * Get books by title part
 * @returns Array of books objects filtered by title part
 */
async function get(req, res, next) {
  try {
    const books = await bookService.find();
    res.json(books);

  } catch (error) {
    next(error);
  }
};

/**
 * Get books list
 * @returns Array of books objects
 */
async function getById(req, res, next) {
  try {
    const id = req.params.id;
    const books = await bookService.findById(id);
    res.json(books);

  } catch (error) {
    next(error);
  }

};

/**
 * Update one book by ID
 * @returns Book updated object
 */
async function put(req, res, next) {
  try {
    const id = req.params.id;
    const book = req.body;
    const books = await bookService.update(id, book);
    res.json(book);
  } catch (error) {
    next(error);
  }

};

/**
 * Create one book
 * @returns Book updated object
 */
async function post(req, res, next) {
  try {
    const book = req.body;
    const books = await bookService.create(book);
    res.json(books);
  } catch (error) {
    next(error);
  }

};

/**
 * Delete one Book by its id
 */
async function deleteOne(req, res, next) {
  try {
    const id = req.params.id;
    const books = await bookService.deleteOne(id);
    res.json(books);
  } catch (error) {
    next(error);
  }

};

module.exports = {
  get,
  getById,
  put,
  post,
  deleteOne
};