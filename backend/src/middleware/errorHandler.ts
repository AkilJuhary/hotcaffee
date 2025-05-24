import { ErrorRequestHandler } from 'express';
import mongoose from 'mongoose';

export const errorHandler: ErrorRequestHandler = (
  err,
  _req,
  res,
  next
) => {
  console.error(err);

  if (err instanceof mongoose.Error.ValidationError) {
    res.status(400).json({
      message: 'Validation Error',
      details: Object.values(err.errors).map(error => error.message)
    });
    return;
  }

  if (err instanceof mongoose.Error.CastError) {
    res.status(400).json({
      message: 'Invalid ID format'
    });
    return;
  }

  // Default error
  res.status(500).json({
    message: 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { error: err.message })
  });
}; 