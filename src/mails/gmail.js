import nodemailer from 'nodemailer'

const config_email = {
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'cuongdkth2209077@fpt.edu.vn',
    pass: 'uidixcnfiwxnnenp'
  }
};

export const transport = nodemailer.createTransport(config_email);
