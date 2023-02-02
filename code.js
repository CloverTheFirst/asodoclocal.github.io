window.onload = () => 
{

    var reader = new FileReader(),
        picker = document.getElementById("picker"),
        table = document.getElementById("table");
    
    picker.onchange = () => reader.readAsText(picker.files[0]);

    reader.onloadend = () => 
    {

        let csv = reader.result;

        let lines = csv.split("\n");

        for (let line of lines)
        
        {
            let cells = line.split(",");
            let ID = cells[0];
            let type = cells[1];
            let inscription = cells[2];
            let Dossard = cells[3];
            let Nom = cells[4];
            let Prenom = cells[5];
            let DatedeN = cells[6];
            let Mug = cells[7];
            let TshirtS = cells[8];
            let TshirtM = cells[9];
            let TshirtL = cells[10];
            let TshirtXL = cells[11];
            let TshirtXXL = cells[12];

            if (numero == Dossard) 
            {
                document.getElementById("result").innerHTML = "Numero : " + Dossard;
                console.log("Il y a : " + Mug + " mugs");
                console.log("Il y a : " + TshirtS + " TshirtS");
                console.log("Il y a : " + TshirtM + " TshirtM");
                console.log("Il y a : " + TshirtL + " TshirtL");
                console.log("Il y a : " + TshirtXL + " TshirtXL");
                console.log("Il y a : " + TshirtXXL + " TshirtXXL");
                console.log(".................................");
            }
        }
    };
};