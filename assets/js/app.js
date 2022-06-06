    
    let income = 12551;

    console.log(`Ваш дохід: ${income}$`);

    let sumNoTax = 12550;

    const tax1 = 0.1;
    const tax2 = 0.12;
    const tax3 = 0.22;
    const tax4 = 0.24;
    const tax5 = 0.32;
    const tax6 = 0.35;
    const tax7 = 0.37;
    
    const rang1 = 9950;
    const rang2 = 40525;
    const rang3 = 86375;
    const rang4 = 164925;
    const rang5 = 209425;
    const rang6 = 523600;

    let fitSum;
    let taxableIncome;

    if (income <= sumNoTax){
        fitSum = 0;
    } else {
        taxableIncome = income - sumNoTax; 

        console.log(`Ваш оподаткований дохід: ${taxableIncome}`);

    }


    if (taxableIncome <= rang1){

        fitSum = tax1 * taxableIncome;

    } else if(taxableIncome > rang1 && taxableIncome <= rang2){

        fitSum = tax1 * rang1 + tax2 * (taxableIncome - rang1);

    } else if (taxableIncome > rang2 && taxableIncome <= rang3) {

        fitSum = tax1 * rang1 + tax2 * (rang2 - rang1) + tax3 * (taxableIncome - rang2);
        
    }else if(taxableIncome > rang3 && taxableIncome <= rang4){

        fitSum = tax1 * rang1 + tax2 * (rang2 - rang1) + tax3 * (rang3 - rang2) + tax4 * (taxableIncome - rang3);
        
    }else if (taxableIncome > rang4 && taxableIncome <= rang5){

        fitSum = tax1 * rang1 + tax2 * (rang2 - rang1) + tax3 * (rang3 - rang2) + tax4 * (rang4 - rang3) + tax5 * (taxableIncome - rang4);

    }else if(taxableIncome > rang5 && taxableIncome <= rang6){

        fitSum = tax1 * rang1 + tax2 * (rang2 - rang1) + tax3 * (rang3 - rang2) + tax4 * (rang4 - rang3) + tax5 * (rang5 - rang4) + tax5 * (taxableIncome - rang5);

    }else if( taxableIncome > rang6){

        fitSum = tax1 * rang1 + tax2 * (taxableIncome - rang1) + tax3 * (taxableIncome - rang2) + tax4 * (taxableIncome - rang3) + tax5 * (taxableIncome - rang4) + tax5 * (taxableIncome - rang5) + tax7 * (taxableIncome - rang6);

    }

    console.log(`Сума Вашого податку: ${fitSum}`);
    




