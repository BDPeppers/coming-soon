const express = require("express");
const cors = require("cors");
require("dotenv").config();
const client = require("@mailchimp/mailchimp_marketing");

const app = express();
app.use(cors());
app.use(express.json());

client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send("Email is required");
  }

  try {
    const response = await client.lists.addListMember(
      process.env.MAILCHIMP_LIST_ID,
      {
        email_address: email,
        status: "pending", // or "subscribed" based on your preference
      }
    );

    res.status(200).json(response);
  } catch (error) {
    console.error("Error with Mailchimp API:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", details: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
