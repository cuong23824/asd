export const guest = (req,res,next) => {
  if (req.session.auth) {
    return res.redirect('/');
  } else {
    return next();
  }
}

export const auth = (req,res,next) => {
  if (req.session.auth) {
    return next();
  }
  return res.redirect('/login')
}