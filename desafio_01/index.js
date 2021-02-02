const express = require('express');

const server = express();
server.use(express.json());

const projects = [
  { 
    "id": "1", 
    "title": "Projeto React",
    "tasks": []
  }
];

function logRequests(req, res, next) {

  console.count("Número de requisições");

  return next();
}

server.use(logRequests);

function checkProjectExists(req, res, next) {
  const { id } = req.params;

  const project = projects.find(p => p.id == id);

  if(!project){
    return res.status(400).json({ error: "Project does not exists." });
  }

  return next();
}

server.get('/projects', (req, res) => {
  return res.json(projects);
});

server.get('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;

  const project = projects.find(p => p.id == id);

  return res.json(project);
});

server.post('/projects', (req, res) => {
  const { id } = req.body;
  const { title } = req.body;

  const project = {
    "id": id,
    "title": title,
    "tasks": []
  }

  projects.push(project);

  return res.json(projects);
});

server.put('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.body;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.title = title;

  return res.json(projects);
})

server.delete('/projects/:id', checkProjectExists, (req, res) =>{
  const { id } = req.params;

  const projectIndex = projects.findIndex(p => p.id == id);

  projects.splice(projectIndex, 1);

  return res.send();
});

server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);
  project.tasks.push(title);

  return res.json(project);
});

server.listen(3000);