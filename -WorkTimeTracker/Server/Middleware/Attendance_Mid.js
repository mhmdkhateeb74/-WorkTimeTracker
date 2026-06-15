let tableName="attendance";



async function AddItem(req,res,next){
    let employee_id   =  req.body.employee_id   || "";

    res.ok=false;
    res.err="";

    if(employee_id === ""){
        res.err="wrong parameters";
        return next();
    }

    const Query = `INSERT INTO ${tableName} (employee_id) VALUES (?)`;
    let values = [employee_id];
    let rows= await GenObj_Mid.QueryExecSimpleReply(Query,values);
    if(rows === false){
        res.err="חלה תקלה, נא לנסות שנית";
        return res.status(500).json({status:"ERROR",Query: Query,err:res.err,values:values});
    }
    res.ok=true;
    res.insertId = rows.insertId;

    next();
}


async function UpdateItem(req,res,next){
    let employee_id        = req.body.employee_id     || "";

    let Query = `UPDATE ${tableName} SET `;
    Query += `exit_time = NOW() `;
    Query += ` WHERE employee_id=? AND exit_time IS NULL` ;
    let values = [employee_id];

    res.ok=false;
    res.err="";
    if(employee_id===""){
        res.err="wrong parameters";
        return next();
    }
   
    let rows= await GenObj_Mid.QueryExecSimpleReply(Query,values);
    if(rows === false){
        res.err="חלה תקלה, נא לנסות שנית";
        return res.status(500).json({status:"ERROR",Query: Query,err:res.err,values:values});
    }
    res.ok=true;

    next();
}




module.exports = {
   
    AddItem,
    UpdateItem,
  
}