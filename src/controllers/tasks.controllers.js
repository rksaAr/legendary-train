const supabase = require('../database');

const taskCtrl = {}

taskCtrl.getTasks = async (req,res)=>{
    const {data,error} = await supabase
        .from('tasks')
        .select('*')

    if (error){
        console.log(error)
        return
    }else{
        console.log(data)
        res.status(200).json(data)
    }
}

taskCtrl.getTask = async (req,res)=>{
    const {id} = req.params;
    const {data,error} = await supabase
        .from('tasks')
        .select('*')
        .eq('id',id)

    if (error){
        console.log(error)
        return
    }else{
        console.log(data)
        res.status(200).json(data)
    }
}

taskCtrl.createTask = async (req,res)=>{
    const {data,error} = await supabase
        .from('tasks')
        .insert([
            req.body
    ])
    if (error){
        console.log(error)
        return
    }else{
        res.status(200).json({msg:"New Task created Successfully",data})
    }
}

taskCtrl.deleteTask = async (req,res)=>{
    const {id} = req.params;
    const {data,error} = await supabase
        .from('tasks')
        .delete()
        .match({id})
    if (error){
        console.log(error)
        return
    }else{
        console.log(data)
        res.status(200).json({msg:"Task deleted Successfully"})
    }
}

taskCtrl.updateTask = async (req,res)=>{
    const {id} = req.params;
    const {data,error} = await supabase
        .from('tasks')
        .update(req.body)
        .match({id})
    if (error){
        console.log(error)
        return
    }else{
        console.log(data)
        res.status(200).json({msg:"Task updated Successfully",data})
    }
}

module.exports = taskCtrl