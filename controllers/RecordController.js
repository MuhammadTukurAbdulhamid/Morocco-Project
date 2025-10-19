const Joi = require("joi");
const { Record } = require("../model/DataModel");
const qr = require("qrcode");
const NodemailerTransporter = require("../middlewares/NodeMailer");
const { generateTransactionRef } = require("../utils/generateTransactionRef");
const https = require("https");
const { default: axios } = require("axios");
const { Token } = require("../model/TokenModel");
const moment = require("moment");
const { Booking } = require("../model/BookingModel");

module.exports.get_all_record = async function (req, res) {
  try {
    const all = await Record.find({}).sort({ date_created: -1 });

    res.status(200).json({ data: all, success: true, error: null });
  } catch (error) {
    res.status(400).json({ error, success: false, data: null });
  }
};
module.exports.getRecordByEmail = async function (req, res) {
  const { email } = req.params;
  try {
    const record = await Record.findOne({ email });
    if (record) {
      res.status(200).json({ data: record, success: true, error: null });
    } else {
      res.status(404).json({ data: null, success: false, error: null });
    }
  } catch (error) {
    res.status(400).json({ error, success: false, data: null });
  }
};

module.exports.getRecordById = async function (req, res) {
  const { id } = req.params;
  try {
    const record = await Record.findOne({ _id: id });
    if (record) {
      res.status(200).json({ data: record, success: true, error: null });
    } else {
      res.status(404).json({ data: null, success: false, error: null });
    }
  } catch (error) {
    res.status(400).json({ error, success: false, data: null });
  }
};

module.exports.getAllTokens = async function (req, res) {
  try {
    const all = await Token.find({}).sort({ creation_date: -1 });

    res.status(200).json({ data: all, success: true, error: null });
  } catch (error) {
    res.status(400).json({ error, success: false, data: null });
  }
};

module.exports.getAllBookings = async function (req, res) {
  try {
    const all = await Booking.find({}).sort({ createdAt: -1 });

    res.status(200).json({ data: all, success: true, error: null });
  } catch (error) {
    res.status(400).json({ error, success: false, data: null });
  }
};

// post controller
module.exports.post = async (req, res) => {
  const {
    company_name,
    creation_date,
    address,
    number_of_employees,
    website,
    mobile,
    email,
    company_niche,
    import_morocco,
    export_morocco,
    meeting_sectors,
    image_url,
    first_name,
    last_name,
    ministry,
    governmental,
    annual_turnover,
    designation,
    cin,
    cin_expiry,
    passport_number,
    passport_expiry,
    cities,
  } = req.body;

  try {
    const result = await Record.collection.insertOne({
      company_name,
      creation_date,
      address,
      number_of_employees,
      website,
      mobile,
      email,
      company_niche,
      import_morocco,
      export_morocco,
      meeting_sectors,
      image_url,
      payment: undefined,
      date_created: new Date(),
      first_name,
      last_name,
      ministry,
      governmental,
      annual_turnover,
      designation,
      cin,
      cin_expiry,
      passport_number,
      passport_expiry,
      cities,
    });

    // Retrieve the inserted document's _id
    const insertedId = result.insertedId;

    // Generate QR code with _id as data
    const qrData = await qr.toDataURL(insertedId.toString());

    // Update the qr_data property of the inserted document
    await Record.collection.updateOne(
      { _id: insertedId },
      { $set: { qr_data: qrData } }
    );

    let attachment = {
      filename: "qr_code.png",
      content: qrData.split(";base64,").pop(),
      encoding: "base64",
    };

    let mailOptions = {
      from: process.env.EMAIL_ADDRESS, // sender address
      to: email, // list of receivers
      subject: "Nigeria-Morocco Business Week 2025", // Subject line
      html: `
        <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 30px; border-radius: 8px; max-width: 500px; margin: auto; color: #222;">
          <div style="text-align: center; margin-bottom: 24px;">
            <h2 style="color: #0a4d8c; margin-bottom: 8px;">Nigeria-Morocco Business Week 2025</h2>
            <p style="font-size: 16px; margin: 0;">Registration Confirmation</p>
          </div>
          <div style="background: #fff; padding: 24px; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <p style="font-size: 16px;">Dear <strong>${first_name} ${last_name}</strong>,</p>
            <p style="font-size: 15px;">Thank you for registering for the <strong>Nigeria-Morocco Business Week 2025</strong>! We are delighted to confirm your interest in participating in this prestigious event, where business leaders and innovators from both nations will connect and collaborate.</p>
          <!--  <p style="font-size: 15px;">Please find your unique QR code below. Kindly present this code at the event entrance for a smooth check-in process:</p>
            <div style="text-align: center; margin: 20px 0;">
              <img src="cid:qr_code" style="height: 150px; width: 150px; border: 1px solid #eee; border-radius: 8px;" alt="QR Code">
            </div> -->
            <p style="font-size: 15px;">Event Details:<br>
              <strong>📅 Date:</strong> 8th - 11th December 2025<br>
              <strong>📍 Locations:</strong> Lagos, Kano and Abuja (Nigeria)<br>
              <strong>🕗 Time:</strong> 08:00 - 19:00 daily
            </p>
            <p style="font-size: 15px;">To secure and confirm your participation, kindly proceed with the payment of your registration fee. Your participation will be fully confirmed upon receipt of payment.</p>
            <p style="font-size: 15px;">Payment details and invoice will be sent upon request.</p>
        <!-- <p style="font-size: 15px;">We look forward to welcoming you! If you have any questions, feel free to reply to this email.</p> -->
            <p style="font-size: 15px; margin-top: 32px;">Best regards,<br><span style="color: #0a4d8c; font-weight: bold;">Nigeria-Morocco Business Week Team</span></p>
          </div>
          <div style="text-align: center; font-size: 12px; color: #888; margin-top: 24px;">
            &copy; 2025 Nigeria-Morocco Business Week. All rights reserved.
          </div>
        </div>
      `, // HTML body with image embedded

      // attachments: [
      //   {
      //     ...attachment,
      //     cid: "qr_code", // Content ID for referencing the image in HTML
      //   },
      // ],
    };
    await NodemailerTransporter.sendMail(mailOptions);

    res.status(200).json({
      message: "Regitered Successfully",
      success: true,
      id: insertedId,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errors: errors, success: false });
  }
};

// edit record
module.exports.edit_record = async function (req, res) {
  const { method, status, reference, date } = req.body;
  const id = req.params.id;

  let data = {
    method,
    status,
    reference,
    date,
  };

  try {
    const findRecord = await Record.findById(id);
    if (findRecord) {
      const update = await Record.updateOne(
        { _id: id },
        {
          $set: {
            payment: data,
          },
        }
      );

      res.status(200).json({
        success: true,
        data: update,
        msg: "Update successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        error: "Record with the ID Provided not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error updating record" });
  }
};

module.exports.deleteRecord = async function (req, res) {
  const id = req.params.id;

  try {
    const findRecord = await Record.findById(id);
    if (findRecord) {
      await Record.findByIdAndDelete(id)
        .then((resutlt) => {
          console.log("DELETE", resutlt);
          res.json({
            success: true,
            msg: "Record deleted successfully",
            data: resutlt,
          });
          return;
        })
        .catch((error) => {
          res.status(500).json({ success: false, error });
          return;
        });
    } else {
      res.status(500).json({
        success: false,
        error: "Record with the ID Provided not found",
      });
      return;
    }
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

// INIITIALISE TRANSACTION FOR REGGISTRATION
module.exports.generateTransaction = async function (req, res) {
  const { method } = req.body;

  const id = req.params.id;

  try {
    const uniqueRef = generateTransactionRef();
    let data = {
      method,
      status: "PENDING",
      reference: uniqueRef,
      date: new Date(),
      amount: 2000,
    };
    const findRecord = await Record.findById(id);
    if (findRecord) {
      const update = await Record.updateOne(
        { _id: id },
        {
          $set: {
            payment: data,
          },
        }
      );

      res.status(200).json({
        success: true,
        data: {
          transaction_ref: uniqueRef,
          amount: 2000,
        },
      });
    } else {
      res.status(404).json({
        success: false,
        error: "Record with the ID Provided not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error updating record" });
  }
};

// VERIFY TRANSACTIONS FOR PAYSTACK PAYMENTS REGISTRATION

module.exports.verifyTransaction = async function (req, res) {
  const id = req.params.id;

  try {
    const findRecord = await Record.findById(id);
    if (findRecord) {
      console.log(findRecord.payment.reference);
      const options = {
        hostname: "api.paystack.co",
        port: 443,
        path: `/transaction/verify/${findRecord.payment.reference}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
        },
      };

      const apiReq = https.request(options, (apiRes) => {
        let data = "";

        apiRes.on("data", (chunk) => {
          data += chunk;
        });

        apiRes.on("end", async () => {
          const parsedData = JSON.parse(data);
          console.log(parsedData);
          if (parsedData.status) {
            const update = await Record.updateOne(
              { _id: id },
              {
                $set: {
                  payment: {
                    status: parsedData.data.status,
                    method: "PAYSTACK",
                    reference: findRecord.payment.reference,
                    date: parsedData.data.paid_at,
                    amount: parsedData.data.amount / 100,
                  },
                },
              }
            );
            res.status(200).json({ success: true, data: findRecord });
          } else {
            res.status(400).json({ success: false, data: null });
          }
        });
      });

      apiReq.on("error", (error) => {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
      });

      // End the request
      apiReq.end();
      // const options = {
      //   hostname: 'api.paystack.co',
      //   port: 443,
      //   path: ``,
      //   method: 'GET',
      //   headers: {

      //   },
      // };
    } else {
      res.status(404).json({
        success: false,
        error: "Record with the ID Provided not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error updating record" });
  }
};

//TOKEN FOR REGISTRATION
module.exports.generateTransactionToken = async function (req, res) {
  const email = req.params.email;
  const creation_date = new Date();
  const uniqueRef = generateTransactionRef() + "-TOKEN";
  const expire_date = new Date(creation_date);
  expire_date.setDate(expire_date.getDate() + 1);
  expire_date.setHours(
    creation_date.getHours(),
    creation_date.getMinutes(),
    creation_date.getSeconds(),
    creation_date.getMilliseconds()
  );

  const result = await Token.collection.insertOne({
    creation_date,
    email,
    reference: uniqueRef,
    used: false,
    expire_date,
  });
  res.status(200).json({ success: true, data: result });
};

module.exports.verifyGeneratedToken = async function (req, res) {
  const email = req.params.email;
  const token = req.params.token;
  const isRegistration = req.params.isRegister;
  const fined = await Token.findOne({ reference: token });
  if (fined) {
    const expire_date = moment(fined.expire_date);
    const current_time = moment();

    const isExpired = expire_date.isBefore(current_time);
    if (fined.used) {
      return res.status(401).json({
        success: false,
        error: "Token already used",
      });
    }
    if (isExpired) {
      return res.status(401).json({
        success: false,
        error: "Token expired",
      });
    }
    if (fined.reference == token) {
      const update = await Token.updateOne(
        { reference: token },
        {
          $set: {
            used: true,
          },
        }
      );
      if (isRegistration) {
        const updatePayment = await Record.updateOne(
          { email: email },
          {
            $set: {
              payment: {
                status: "Success",
                method: "CODE",
                reference: fined.reference,
                date: new Date(),
                amount: 2000,
              },
            },
          }
        );
      } else {
        const updateBooking = await Booking.updateOne(
          { email: email },
          {
            $set: {
              payment: {
                status: "Success",
                method: "CODE",
                reference: fined.reference,
                date: new Date(),
                amount: 2000,
              },
            },
          }
        );
      }
      res.status(200).json({ success: true, data: update });
    } else {
      res.status(401).json({
        success: false,
        error: "Invalid Token",
      });
    }
  } else {
    res.status(404).json({
      success: false,
      error: "Token Not Found",
    });
  }
};

// INIITIALISE TRANSACTION FOR BOOKING
module.exports.createBooking = async function (req, res) {
  const {
    method,
    name,
    email,
    space,
    mobile,
    full_name,
    job_title,
    annual_turnover,
    sector,
    personalised,
    square_meters,
    personal_meters,
  } = req.body;
  try {
    const uniqueRef = generateTransactionRef() + "BOOKING";

    let data = {
      method,
      status: "PENDING",
      reference: uniqueRef,
      date: new Date(),
      amount: 2000,
    };

    const result = await Booking.collection.insertOne({
      creation_date: new Date(),
      space,
      mobile,
      name,
      email,
      payment: data,
      full_name,
      personal_meters,
      job_title,
      annual_turnover,
      sector,
      personalised,
      square_meters,
    });
    const insertedId = result.insertedId;
    res.status(200).json({
      success: true,
      data: {
        transaction_ref: uniqueRef,
        amount: 2000,
        id: insertedId,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error Creating Booking" });
  }
};

// VERIFY TRANSACTIONS FOR PAYSTACK PAYMENTS BOOKING

module.exports.verifyBooking = async function (req, res) {
  const id = req.params.id;

  try {
    const findRecord = await Booking.findById(id);
    if (findRecord) {
      const options = {
        hostname: "api.paystack.co",
        port: 443,
        path: `/transaction/verify/${findRecord.payment.reference}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
        },
      };

      const apiReq = https.request(options, (apiRes) => {
        let data = "";

        apiRes.on("data", (chunk) => {
          data += chunk;
        });

        apiRes.on("end", async () => {
          const parsedData = JSON.parse(data);

          if (parsedData.status) {
            const update = await Booking.updateOne(
              { _id: id },
              {
                $set: {
                  payment: {
                    status: parsedData.data.status,
                    method: "PAYSTACK",
                    reference: findRecord.payment.reference,
                    date: parsedData.data.paid_at,
                    amount: parsedData.data.amount / 100,
                  },
                },
              }
            );
            res.status(200).json({ success: true, data: findRecord });
          } else {
            res.status(400).json({ success: false, data: null });
          }
        });
      });

      apiReq.on("error", (error) => {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
      });

      // End the request
      apiReq.end();
      // const options = {
      //   hostname: 'api.paystack.co',
      //   port: 443,
      //   path: ``,
      //   method: 'GET',
      //   headers: {

      //   },
      // };
    } else {
      res.status(404).json({
        success: false,
        error: "Record with the ID Provided not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error updating record" });
  }
};
