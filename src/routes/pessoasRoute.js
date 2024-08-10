const {Router} = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const pessoaController = new PessoaController();

const router = Router();

router.get('/pessoas', (req, res, next) => pessoaController.getAll(req,res,next));
router.put('/pessoas/:id', (req, res, next) => pessoaController.update(req, res, next));
router.get('/pessoas/:id', (req, res, next) => pessoaController.getById(req, res, next));
router.post('/pessoas', (req, res, next) => pessoaController.create(req, res, next));
router.delete('/pessoas/:id', (req, res, next) => pessoaController.delete(req, res, next));

module.exports = router;