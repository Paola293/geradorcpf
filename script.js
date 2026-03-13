function gerarCPF() {
    const numRandom = () => Math.floor(Math.random() * 9);
    const noveDigitos = Array.from({length: 9}, numRandom);
    
    const criarDigito = (base) => {
        let peso = base.length + 1;
        let soma = base.reduce((acc, curr) => acc + (curr * peso--), 0);
        let resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    };

    const dv1 = criarDigito(noveDigitos);
    const dv2 = criarDigito([...noveDigitos, dv1]);
    
    const cpfFinal = [...noveDigitos, dv1, dv2].join('');
    document.getElementById('cpf-display').innerText = formatarCPF(cpfFinal);
}

function formatarCPF(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}