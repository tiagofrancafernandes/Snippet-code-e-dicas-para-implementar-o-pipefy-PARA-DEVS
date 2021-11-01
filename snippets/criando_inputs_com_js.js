function newPhaseInput(phase_id, input_data)
{
    var token = 'SEU_TOKEN_AQUI';
    var options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `mutation { createPhaseField( input:{ phase_id: ${phase_id} label: "${input_data.id}" description: "${input_data.id}" required:${input_data.required} type: "${input_data.type}" }) { phase_field { id }   } }`
        })
    };

    fetch('https://api.pipefy.com/graphql', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

//Exmplo com um inputa apenas
/*
var phase_id = 310001256;
var input_data = {
    "id": "c_digo",
    "label": "Código",
    "description": "Código",
    "required": false,
    "type": "short_text"
};
newPhaseInput(phase_id, input_data)
/* */


//Com vários inputs
var source_fields = {
    "start_form_fields": [
        {
            "id": "nome_do_cliente",
            "label": "Cliente",
            "description": "Cliente",
            "required": false,
            "type": "short_text"
        },
        {
            "id": "email_cliente",
            "label": "Email cliente",
            "description": "Email cliente",
            "required": true,
            "type": "email"
        },
        {
            "id": "cnpj",
            "label": "CNPJ",
            "description": "CNPJ",
            "required": false,
            "type": "cnpj"
        },
        {
            "id": "tel",
            "label": "Tel",
            "description": "Tel",
            "required": true,
            "type": "phone"
        }
    ]
}

var phase_id = 310001256;
source_fields["start_form_fields"].forEach((input_data) => {
    newPhaseInput(phase_id, input_data)
});
