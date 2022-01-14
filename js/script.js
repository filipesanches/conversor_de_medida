let inputs = document.getElementsByTagName('input')
let selects = document.getElementsByTagName('select')
let resultado = document.getElementsByTagName('p')[2]
function apagarFocus() {
    inputs[0].value = ''
    inputs[0].focus()
}

inputs[1].addEventListener('click', function (numero) {
    numero = inputs[0].value
    if (numero.length == 0 || isNaN(numero)) {
        apagarFocus()
        return resultado.innerHTML = `Insira um numero`
    } else {
        if (selects[0].value == 'mm' && selects[1].value == 'mm' ||
            selects[0].value == 'cm' && selects[1].value == 'cm' ||
            selects[0].value == 'dm' && selects[1].value == 'dm' ||
            selects[0].value == 'm' && selects[1].value == 'm' ||
            selects[0].value == 'dam' && selects[1].value == 'dam' ||
            selects[0].value == 'hm' && selects[1].value == 'hm' ||
            selects[0].value == 'km' && selects[1].value == 'km' ) {
            return resultado.innerHTML = `Alterne as unidades de medidas`
        } else {
            if (selects[0].value == 'mm' && selects[1].value == 'cm') {
                return resultado.innerHTML = `${numero / 10}cm`
            } else if (selects[0].value == 'mm' && selects[1].value == 'dm') {
                return resultado.innerHTML = `${numero / 100}dm`
            } else if (selects[0].value == 'mm' && selects[1].value == 'm') {
                return resultado.innerHTML = `${numero / 1000}m`
            } else if (selects[0].value == 'mm' && selects[1].value == 'dam') {
                return resultado.innerHTML = `${numero / 10000}dam`
            } else if (selects[0].value == 'mm' && selects[1].value == 'hm') {
                return resultado.innerHTML = `${numero / 100000}hm`
            } else if (selects[0].value == 'mm' && selects[1].value == 'km') {
                return resultado.innerHTML = `${numero / 1000000}km`
            }

            else if (selects[0].value == 'cm' && selects[1].value == 'mm') {
                return resultado.innerHTML = `${numero * 10}mm`
            } else if (selects[0].value == 'cm' && selects[1].value == 'dm') {
                return resultado.innerHTML = `${numero / 10}dm`
            } else if (selects[0].value == 'cm' && selects[1].value == 'm') {
                return resultado.innerHTML = `${numero / 100}m`
            } else if (selects[0].value == 'cm' && selects[1].value == 'dam') {
                return resultado.innerHTML = `${numero / 1000}dam`
            } else if (selects[0].value == 'cm' && selects[1].value == 'hm') {
                return resultado.innerHTML = `${numero / 10000}hm`
            } else if (selects[0].value == 'cm' && selects[1].value == 'km') {
                return resultado.innerHTML = `${numero / 100000}km`
            }

            else if (selects[0].value == 'dm' && selects[1].value == 'mm') {
                return resultado.innerHTML = `${numero * 100}mm`
            } else if (selects[0].value == 'dm' && selects[1].value == 'cm') {
                return resultado.innerHTML = `${numero * 10}cm`
            } else if (selects[0].value == 'dm' && selects[1].value == 'm') {
                return resultado.innerHTML = `${numero / 10}m`
            } else if (selects[0].value == 'dm' && selects[1].value == 'dam') {
                return resultado.innerHTML = `${numero / 100}dam`
            } else if (selects[0].value == 'dm' && selects[1].value == 'hm') {
                return resultado.innerHTML = `${numero / 1000}hm`
            } else if (selects[0].value == 'dm' && selects[1].value == 'km') {
                return resultado.innerHTML = `${numero / 10000}km`
            }

            else if (selects[0].value == 'm' && selects[1].value == 'mm') {
                return resultado.innerHTML = `${numero * 1000}mm`
            } else if (selects[0].value == 'm' && selects[1].value == 'cm') {
                return resultado.innerHTML = `${numero * 100}cm`
            } else if (selects[0].value == 'm' && selects[1].value == 'dm') {
                return resultado.innerHTML = `${numero * 10}dm`
            } else if (selects[0].value == 'm' && selects[1].value == 'dam') {
                return resultado.innerHTML = `${numero / 10}dam`
            } else if (selects[0].value == 'm' && selects[1].value == 'hm') {
                return resultado.innerHTML = `${numero / 100}hm`
            } else if (selects[0].value == 'm' && selects[1].value == 'km') {
                return resultado.innerHTML = `${numero / 1000}km`
            }

            else if (selects[0].value == 'dam' && selects[1].value == 'mm') {
                return resultado.innerHTML = `${numero * 10000}mm`
            } else if (selects[0].value == 'dam' && selects[1].value == 'cm') {
                return resultado.innerHTML = `${numero * 1000}cm`
            } else if (selects[0].value == 'dam' && selects[1].value == 'dm') {
                return resultado.innerHTML = `${numero * 100}dm`
            } else if (selects[0].value == 'dam' && selects[1].value == 'm') {
                return resultado.innerHTML = `${numero * 10}m`
            } else if (selects[0].value == 'dam' && selects[1].value == 'hm') {
                return resultado.innerHTML = `${numero / 10}hm`
            } else if (selects[0].value == 'dam' && selects[1].value == 'km') {
                return resultado.innerHTML = `${numero / 100}km`
            }

            else if (selects[0].value == 'hm' && selects[1].value == 'mm') {
                return resultado.innerHTML = `${numero * 100000}mm`
            } else if (selects[0].value == 'hm' && selects[1].value == 'cm') {
                return resultado.innerHTML = `${numero * 10000}cm`
            } else if (selects[0].value == 'hm' && selects[1].value == 'dm') {
                return resultado.innerHTML = `${numero * 1000}dm`
            } else if (selects[0].value == 'hm' && selects[1].value == 'm') {
                return resultado.innerHTML = `${numero * 100}m`
            } else if (selects[0].value == 'hm' && selects[1].value == 'dam') {
                return resultado.innerHTML = `${numero * 10}dam`
            } else if (selects[0].value == 'hm' && selects[1].value == 'km') {
                return resultado.innerHTML = `${numero / 10}km`
            }

            else if (selects[0].value == 'km' && selects[1].value == 'mm') {
                return resultado.innerHTML = `${numero * 1000000}mm`
            } else if (selects[0].value == 'km' && selects[1].value == 'cm') {
                return resultado.innerHTML = `${numero * 100000}cm`
            } else if (selects[0].value == 'km' && selects[1].value == 'dm') {
                return resultado.innerHTML = `${numero * 10000}dm`
            } else if (selects[0].value == 'km' && selects[1].value == 'm') {
                return resultado.innerHTML = `${numero * 1000}m`
            } else if (selects[0].value == 'km' && selects[1].value == 'dam') {
                return resultado.innerHTML = `${numero * 100}dam`
            } else if (selects[0].value == 'km' && selects[1].value == 'hm') {
                return resultado.innerHTML = `${numero * 10}hm`
            }
        }
    }
})