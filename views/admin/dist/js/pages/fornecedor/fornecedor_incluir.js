$(function () {
    'use strict';

    var tipoDocumento = $("#divTipoDocumento");
    var nomeRazaoSocial = $("#divNomeRazaoSocial");
    var nomeFantasia = $("#divNomeFantasia");

    tipoDocumento.hide();
    nomeRazaoSocial.hide();
    nomeFantasia.hide();

    $(document).on('click', 'input[type=radio]', function () {
        var id = $(this).prop('id');
        mostrarInput(id);
    });

    function mostrarInput(id) {
        switch (id) {
            case 'pf':
                $('#divTipoDocumento label').text('CPF');
                $('#divTipoDocumento label').prop('for', 'cpf');
                $('#divTipoDocumento label').prop('name', 'cpf')
                    .prop('id', 'cpf');

                tipoDocumento.show();
                $('#divNomeRazaoSocial label').text('Nome')
                    .prop('for', 'nome');
                $('#divNomeRazaoSocial input').prop('name', 'nome')
                    .prop('id', 'nome');

                nomeRazaoSocial.show();
                nomeFantasia.hide();

                break;
            case 'pj':
                $('#divTipoDocumento label').text('CNPJ');
                $('#divTipoDocumento label').prop('for', 'cnpj');
                $('#divTipoDocumento label').prop('name', 'cnpj')
                    .prop('id', 'cnpj');
                tipoDocumento.show();
                $('#divNomeRazaoSocial label').text('Razão Social');
                $('#divNomeRazaoSocial label').prop('for', 'razaoSocial');
                $('#divNomeRazaoSocial input').prop('name', 'razaoSocial');
                $('#divNomeRazaoSocial input').prop('id', 'razaoSocial');
                nomeRazaoSocial.show();

                $('#divNomeFantasia label').text('Nome Fantasia');
                $('#divNomeFantasia label').prop('for', 'nomeFantasia');
                $('#divNomeFantasia input').prop('name', 'nomeFantasia');
                $('#divNomeFantasia input').prop('id', 'nomeFantasial');

                nomeFantasia.show();
                break;
            default:
                break;
        }
    }
});

