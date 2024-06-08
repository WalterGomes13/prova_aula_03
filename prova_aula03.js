<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        var alunos = parseInt(prompt("DIgite o número de alunos na turma: "))
        var contador = 0
        var soma = 0
        var notas = []
        while(contador<alunos){
            var nota = parseFloat(prompt("Digite a nota do aluno: "))
            soma +=nota
            notas.unshift(nota)
            contador++
        }
        var media = soma/alunos
        console.log(`A nota máxima é ${Math.max.apply(null,notas)}`)
        console.log(`A nota mínima é ${Math.min.apply(null,notas)}`)
        console.log(`A média da sala é ${media}`)
    </script>
</body>
</html>
