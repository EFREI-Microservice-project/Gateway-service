const express = require("express");
const router = express.Router();
const axios = require("../utils/http");

router.get("/", async (req, res) => {
    try {
        const response = await axios.get(process.env.CV_SERVICE_URL + "/api");
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch CV data" });
        console.log(err);
    }
});

module.exports = router;
