const ErrorJsonSerializer = require('./ValidationErrorJsonSerializer')

const validationErrorHandler = (err, req, res, next) => {
  if(err.name === 'ValidationError') {
    errs = []
    Object.keys(err.errors).forEach((attribute) => {
      errs.push({
        source: {
          pointer: `/data/attributes/${err.errors[attribute].path}`,
          parameter: err.errors[attribute].value,
        },
        title: err.errors[attribute].kind,
        detail: err.errors[attribute].message,
      })
    })

    res.status(422).json(new ErrorJsonSerializer(errs))
  } else {
    next(err)
  }
}

module.exports = validationErrorHandler
