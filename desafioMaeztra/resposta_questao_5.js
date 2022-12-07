
    function Fatorial(num){
        var soma = 1;
        if (Number.isInteger(num) == true){
            while(num>0){
                soma = soma*num;
                num--;
            }
            return soma;
        } else {
            alert("Impossivel obter a quantidade de organização")
            return 0;
        }
    }


   

