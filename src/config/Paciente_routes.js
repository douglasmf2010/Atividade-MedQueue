const PacienteController = require('../controllers/Paciente_controller');

function paciente_route(app) {
  app.get('/pacientes', (req, res) => {
    PacienteController.index(req, res);
  });
  app.put('/paciente/proximo', (req, res) =>{
    PacienteController.chamarProximo(req, res)
  });
  app.put('/paciente/finalizar', (req, res) =>{
    PacienteController.finalizar(req, res)
  });
  app.get('/paciente/:id', (req, res) => {
    PacienteController.show(req, res);
  });
  app.post('/paciente', (req, res) => {
    PacienteController.create(req, res);
  });
  app.put('/paciente/:id', (req, res) => {
    PacienteController.update(req, res);
  });
  app.delete('/paciente/:id', (req, res) => {
    PacienteController.delete(req, res);
  });

  
}
module.exports = paciente_route;
