const {Router} = require('express');
const {getTasks,getTask,createTask,deleteTask,updateTask} = require('../controllers/tasks.controllers');


const router = Router();

router.get('/api/tasks', getTasks)
router.get('/api/tasks/:id',getTask)
router.post('/api/tasks',createTask)
router.delete('/api/tasks/:id',deleteTask)
router.put('/api/tasks/:id',updateTask)


module.exports = router;