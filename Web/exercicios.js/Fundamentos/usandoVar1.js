{
    {

        {

            {
                var sera = 'Será???' // var visivel globalmente
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() { // var so visivel dentro da função
    var local = 123
    console.log(local)
}

teste()
// console.log(local)