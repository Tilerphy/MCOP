var express = require("express");
var app  = express();
app.get("/", function(req, res){
        var command = req.query["q"];
        var Rcon = require("srcds-rcon");
        var rcon = Rcon({
                address: "localhost:25575",
                password: "123456"
            });
        rcon.connect().then(()=>{
                console.log("Command: "+ command);
                res.write("<html language='zh-CN'>");
                res.write("<body>OK <br/>");
                var _p = rcon.command(command).then(message => {
                        console.log(message);
                        res.write(message.replace(new RegExp("\n", "gm"), "<br/>")
                                        .replace(new RegExp("B['][a-zA-Z0-9]", "gm"), "") +"<br/>")
                });
                return _p;
            })
        .then(()=>{
            rcon.disconnect();
            res.end("</body></html>");
            return rcon;
        })
        .catch((e)=>{
                res.write("failed: ", e);
                res.end("</body></html>");
            });
    });
app.listen(9000);
