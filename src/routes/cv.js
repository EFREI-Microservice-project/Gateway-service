const express = require("express");
const router = express.Router();
const axios = require("../utils/http");

/**
 * @swagger
 * tags:
 *   name: Cv
 *   description: Cv related API endpoints
 */

/**
 * @swagger
 * /cv/createCv:
 *   post:
 *     summary: Création d'un nouveau CV
 *     tags: [Cv]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *               title:
 *                 type: string
 *               education:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     school:
 *                       type: string
 *                     formation:
 *                       type: string
 *                     description:
 *                       type: string
 *                     startDate:
 *                       type: number
 *                     endDate:
 *                       type: number
 *               experience:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     compagny:
 *                       type: string
 *                     position:
 *                       type: string
 *                     startDate:
 *                       type: number
 *                     endDate:
 *                       type: number
 *               biography:
 *                 type: string
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *               softSkills:
 *                 type: array
 *                 items:
 *                   type: string
 *               telephone:
 *                 type: number
 *               linkedin:
 *                 type: string
 *               private:
 *                 type: boolean
 *               language:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: CV créé avec succès
 *       400:
 *         description: Requête invalide
 */
router.post("/createCv", async (req, res) => {
    try {
        const response = await axios.post(process.env.CV_SERVICE_URL + "/api/cv/createCv", req.body);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch CV data" });
        console.log(err);
    }
});

/**
 * @swagger
 * /cv/getAllPubliccv:
 *   get:
 *     summary: Récupérer tous les des CV publics sans détails
 *     tags: [Cv]
 *     responses:
 *       200:
 *         description: Liste de CV avec détails minimalistes
 */
router.get("/getAllPublicCv", async (req, res) => {
    try {
        const response = await axios.get(process.env.CV_SERVICE_URL + "/api/cv/getAllPubliccv");
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch CV data" });
        console.log(err);
    }
});

/**
 * @swagger
 * /cv/{id}:
 *   patch:
 *     summary: Mettre à jour un CV
 *     tags: [Cv]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID du CV
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               education:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     school:
 *                       type: string
 *                     formation:
 *                       type: string
 *                     description:
 *                       type: string
 *                     startDate:
 *                       type: number
 *                     endDate:
 *                       type: number
 *               experience:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     compagny:
 *                       type: string
 *                     position:
 *                       type: string
 *                     startDate:
 *                       type: number
 *                     endDate:
 *                       type: number
 *               biography:
 *                 type: string
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *               softSkills:
 *                 type: array
 *                 items:
 *                   type: string
 *               telephone:
 *                 type: number
 *               linkedin:
 *                 type: string
 *               private:
 *                 type: boolean
 *               language:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: CV mis à jour avec succès
 *       400:
 *         description: Requête invalide
 */
router.patch("/:id", async (req, res) => {
    try {
        const response = await axios.patch(process.env.CV_SERVICE_URL + "/api/cv/update/" + req.params.id, req.body);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Failed to update CV" });
        console.log(err);
    }
});

/**
 * @swagger
 * /cv/{id}:
 *   get:
 *     summary: Récupérer un CV par ID
 *     tags: [Cv]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID du CV
 *     responses:
 *       200:
 *         description: Détails du CV
 *       404:
 *         description: CV non trouvé
 */
router.get("/:id", async (req, res) => {
    try {
        const response = await axios.get(process.env.CV_SERVICE_URL + "/api/cv/" + req.params.id);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch CV data" });
        console.log(err);
    }
});

/**
 * @swagger
 * /cv/{id}:
 *   delete:
 *     summary: Supprimer un CV par ID
 *     tags: [Cv]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID du CV
 *     responses:
 *       200:
 *         description: CV supprimé avec succès
 *       404:
 *         description: CV non trouvé
 */
router.delete("/:id", async (req, res) => {
    try {
        const response = await axios.delete(process.env.CV_SERVICE_URL + "/api/cv/" + req.params.id);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Failed to delete CV" });
        console.log(err);
    }
});

module.exports = router;
