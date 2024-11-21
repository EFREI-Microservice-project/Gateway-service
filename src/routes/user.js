const express = require("express");
const router = express.Router();
const axios = require("../utils/http");

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User related API endpoints
 */

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Register a user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully registered user
 *       500:
 *         description: Failed to register user
 */
router.post("/register", async (req, res) => {
    try {
        const response = await axios.post(process.env.USER_SERVICE_URL + "/api/auth/register", req.body);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Failed to register user" });
        console.log(err);
    }
});

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Authentification de l'utilisateur
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Succès de l'authentification
 *       401:
 *         description: Échec de l'authentification
 */
router.post("/login", async (req, res) => {
    try {
        const response = await axios.post(process.env.USER_SERVICE_URL + "/api/auth/login", req.body);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Failed to register user" });
        console.log(err);
    }
});

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Récupérer ses informations
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'utilisateur à modifier
 *     responses:
 *       201:
 *         description: Récupération des informations
 *       400:
 *         description: Requête invalide
 */
router.get("/:id", async (req, res) => {
    try {
        const response = await axios.get(process.env.USER_SERVICE_URL + "/api/user/", req.params);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Failed to register user" });
        console.log(err);
    }
});

/**
 * @swagger
 * /user/{id}:
 *   patch:
 *     summary: Modifier ses informations
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'utilisateur à modifier
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Informations modifés avec succès
 *       400:
 *         description: Requête invalide
 */
router.patch("/:id", async (req, res) => {
    try {
        const response = await axios.patch(process.env.USER_SERVICE_URL + "/api/user/", req.params, req.body);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Failed to register user" });
        console.log(err);
    }
});

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Supprime un utilisateur
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'utilisateur à supprimer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Utilisateur supprimé avec succès
 *       401:
 *         description: Échec de la suppression (authentification requise)
 *       404:
 *       description: Utilisateur non trouvé
 */
router.delete("/:id", async (req, res) => {
    try {
        const response = await axios.delete(process.env.USER_SERVICE_URL + "/api/user/", req.params);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Failed to register user" });
        console.log(err);
    }
});

module.exports = router;
