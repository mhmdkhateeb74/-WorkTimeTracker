let tableName="attendance";


async function GetAllItems(req,res,next){

    let values = [];
    let Query = `SELECT * FROM ${tableName}  `;
    Query += " ORDER BY  employee_id  ";
   
    res.ok=false;
    res.err="";
    let rows= await GenObj_Mid.QueryExecSimpleReply(Query,values);
    if(rows === false){
        res.err="חלה תקלה, נא לנסות שנית";
        return res.status(500).json({status:"ERROR",Query: Query,err:res.err,values:values});
    }
    let data_by_id=[];
    for(let row of rows){
        data_by_id[row.id]=row.employee_id;
    }
    res.ok=true;
    req.ItemsData={list:rows,data_by_id:data_by_id};

    next();
}

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



async function SearchTheItems(req,res,next){

    let employee_id     =  req.body.employee_id     || "";
    let month           =  req.body.month    || "";


    if(employee_id === "" || month === ""){
        res.err="wrong parameters";
        return next();
    }

    let Query = `SELECT * FROM ${tableName} `;
    Query += `WHERE employee_id = ? `;
    Query += `AND MONTH(entry_time) = ? `;
    Query += `ORDER BY entry_time`;
   
     let values = [employee_id,month];

    res.ok=false;
    res.err="";
    let rows= await GenObj_Mid.QueryExecSimpleReply(Query,values);

    if(rows === false){
        res.err="חלה תקלה, נא לנסות שנית";
        return res.status(500).json({status:"ERROR",Query: Query,err:res.err,values:values});
    }
 
    res.ok=true;
    req.ItemsData=rows;

    next();
}


module.exports = {
    GetAllItems,
    AddItem,
    UpdateItem,
    SearchTheItems
}