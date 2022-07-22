export const Validator = {
    /**
     * Control if is a name
     * @param  { String } name
     * @param  { String } email
     */
    name : (name) => {
        if(typeof name!=="string")throw new Error(`'${name}' n'est pas une chaine de caracteres !`);
        let min=3, max=50;
        let regex=/^[A-Za-zéèàê]+((\s)?((\'|\-|\.)?([A-Za-zéèàê])+))*$/.test(name);
        if(!Validator.space(name)) return "Commencer ou finir par un espace n'est pas autorisé !";
        if(Validator.caract(name)) return "Les caractères spéciaux ne sont pas autorisés !";
        if(Validator.lgt(name.length,min,max)) return Validator.lgt(name.length,min,max);
        if(!regex) return "Nom invalide !";
        return false;
    },
    email : (email) => {
        if(typeof email!=="string")throw new Error(`'${email}' n'est pas une chaine de caracteres !`);
        let regex=/^[a-zA-Z0-9_\W]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/g.test(email);
        if(!Validator.arob(email)) return "Le symbole arobase doit être présent 1 fois et une seule !";
        if(Validator.lgt(email.length,3,50)) return Validator.lgt(email.length,3,50);
        if(!regex) return "Email non valide !";
        return false;
    },
    subject : (subject) => {
        if(typeof subject!=="string")throw new Error(`'${subject}' n'est pas une chaine de caracteres !`);
        let min=3, max=50;
        if(!Validator.space(subject)) return "Commencer ou finir par un espace ou un caractère spécial n'est pas autorisé !";
        if(Validator.lgt(subject.length,3,50)) return Validator.lgt(subject.length,3,50);
        // if(!regex) return "sujet non valide";
        return false;
    },
    mssag : (mssag) => {
        if(typeof mssag!=="string")throw new Error(`'${mssag}' n'est pas une chaine de caracteres !`);
        let min=3, max=50;
        if(!Validator.space(mssag)) return "Commencer ou finir par un espace ou un caractère spécial n'est pas autorisé !";
        if(Validator.lgt(mssag.length,3,500)) return Validator.lgt(mssag.length,3,500);
        // if(!regex) return "sujet non valide";
        return false;
    },
    space:(value)=>{
        return /^[a-zA-Z0-9](.*[a-zA-Z0-9])?$/.test(value)
    },
    arob:(value)=>{
        return /^[^@]*@[^@]*$/g.test(value);
    },
    caract:(value)=>{
        return /[^\w\sÜ-ü'._-]+/.test(value)
    },
    lgt:(value, min, max)=>{
        if(typeof value !="number") throw new Error(`'${value}' isn't a number !`)
        if(value<min) return `Le champ doit contenir au moins ${min} caractères !`;
        if(value>max) return `Le champ doit contenir moins de ${max} caractères !`;
}
 }


// console.log(Validator.space("hhh "));
