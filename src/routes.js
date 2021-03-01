const router = require('express').Router();

router.get('/health', (req, res) => res.status(204).send());

module.exports = router;
