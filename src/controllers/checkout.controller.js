export const checkout = (req, res) => {
  const user = req.session.auth;
  res.render('checkout/checkout',{user:user})
};
