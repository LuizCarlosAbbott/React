const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 15 * * 0', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())  // */(tempo a cada segundos) (minuto) (hora) (dia) (mes) (dia da semana)
})                                                                // */(tempo exato postado em segundos)

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0, 5)]
regra.hour = 15
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})