//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o obbjeto que ira fazer operções de banco de dados
const db = new sqlite3.Database("./scr/database/database.db")

module.exports = db
// ultilizar o objeto de banco de dados para nossas funções
db.serialize(() => {
    //com comandos SQL eu vou:

    // 1 criar uma tabela
    //db.run(`
    //    CREATE TABLE IF NOT EXISTS places (
    //        id INTEGER PRIMARY KEY AUTOINCREMENT,
    //        image TEXT,
    //        name TEXT,
    //        address TEXT,
    //        address2 TEXT,
    //        state TEXT,
    //        city TEXT,
    //        items TEXT
    //    );
    //`)


    // 2 inserir dados na tabela 
    //const query = `
    //    INSERT INTO places (
    //        image,
    //        name,
    //        address,
    //        address2,
    //        state,
    //        city,
    //        items
    //    ) VALUES (?,?,?,?,?,?,?);
    //`
    //const velues = [
    //    "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
    //    "Papersider",
    //    "Guilherme Gemalla, Jardim América",
    //    "Número 260",
    //    "Santa Catarina",
    //    "Rio do Sul",
    //    "Residuos Eletrônicos, Lâmpadas"

    //]
    //function afterInsertData(err){
    //    if(err){
    //        return console.log(err)
    //    }
    //    
    //    console.log("Cadastrado com sucesso")
    //    console.log(this)
    //}

   //db.run(query, velues, afterInsertData)
    
    
    // 3 consultar os dados na tabela
    //db.all(`SELECT name FROM places`, function(err, rows){
    //    if(err){
    //        return console.log(err)
    //    }
    //    console.log("Aqui estão seus resistros: ")
    //    console.log(rows)
    //})


     //4 deletar um dado na tabela 
    //db.run(`DELETE FROM places WHERE id = ?`, [4], function(err){
    //    if(err){
    //       return console.log(err)
    //    }
    //    console.log("Registro deletado com sucesso")
    //})

})

//parei em 49:33