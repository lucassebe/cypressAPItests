Cypress.Commands.add('login', (username, password, captcha) => {
    cy.api({
            method: 'POST',
            url: '  https://cerusbank-portal-api-dev.uc.r.appspot.com/auth',
            body: {
                "password": "bext2020",
                "username": "09678304430",
                //"captcha": "03ANYolqsbj815VX2lUKpaBNvC3Rt19rPBsm0l8C2KrolloQ6rhpI_AUli57ZJc2PG0H_ZGWzjBO3KG8mh8bwxAmWltC2UFytM7delyOI0ltY-Nhc_GCnv0t8lLLats7hDfCXpZDCi7522s96u1epM6v6V16UQTlng9hmF2Ak5g8muwo9YZ8OiwyPG1a6hODBoS2TM8hEvs6ogsL04tjL_vaugLkd4wi3k4LLzMj25-zIYAzxYq0QWhBE5OCBGAWn5x3kZ_HB8Lkel5jua4C64Z9ysL5E3FgfuufShhmtXuGWt5B5ZC_o70hp66IR_mjRca71YMk1OnntQAOBkWxRXTxTgs_xeHY1u4US81Pbi26qrj8gEMKYpc4WwmzkSLhkVfxEyeGH4A3gf0XOURYkwbap5sbSQ-vdT51hbsmcnIVyMUWNUrThLwK744HjouaO_Kq2J2AhKuB6MZuR0csIAL23_LbZwLByT9tMT_NVXy_rbVACy82-TE1ga5Ntvt10pPD6F-xzdhUoEELCsFkFeRkmyXj6wSlDAsg"
            },
        }).as('loginResponse')
        .then((response) => {
            Cypress.env('token', response.body.acessToken);
            return response;
        })
})