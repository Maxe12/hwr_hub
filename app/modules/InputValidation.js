validateInput = (text, labelId) => {
    switch (labelId) {
        case 'first':
            let reFirst = /([A-Z][a-zA-Z]*)/;
            let isValidf = reFirst.test(text);
            state = { first: text, firstIsValid: isValidf, firstrender: false };
            return state;
        case 'last':
            let reLast = /([A-Z][a-zA-Z]*)/;
            let isValidl = reLast.test(text);
            state = { last: text, lastIsValid: isValidl, firstrender: false };
            return state;
        case 'email':
            let reEmail = /s_+\S+([0-9]{2})+@stud\.hwr-berlin\.de/;
            let isValide = reEmail.test(text);
            state = { email: text, emailIsValid: isValide, firstrender: false };
            return state;
        case 'matrknr':
            let reMatrknr = /^(77220)([0-9]{6})/;
            let isValidm = reMatrknr.test(text);
            state = { matrknr: text, matrknrIsValid: isValidm, firstrender: false };
            return state;
        case 'password': 
            let rePwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@!+#.,?%&$§<>^)(/)])[0-9a-zA-Z@!+#.,?%&$§<>^)(/)]{8,}$/;
            let isValidpwd = rePwd.test(text);
            state = { password: text, passwordIsValid: isValidpwd, firstrender: false};
            return state;
        default: 
            return null;
    }
}

export default validateInput;