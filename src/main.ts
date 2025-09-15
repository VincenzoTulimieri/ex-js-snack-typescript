import { Dipendente, Developer, ProjectManager } from "./type"

// Snack 1 
let data: unknown
if (typeof data === 'string') {
  console.log(data.toUpperCase())
} else if (typeof data === 'number') {
  console.log(data * 2)
} else if (typeof data === 'boolean') {
  console.log(data ? 'si' : 'no')
} else if (data === null) {
  console.log('Il dato è vuoto')
} else if (Array.isArray(data)) {
  console.log(data.length)
} else {
  console.log('Tipo non supportato')
}

// Snack 2 
const person: Dipendente = {
  nome: 'Vincenzo',
  cognome: 'Tulimieri',
  annoNascita: 1995,
  sesso: 'm',
  annoDiServizio: [2021, 2022, 2023],
  emailAziendale: 'vincenzo22@gmail.com',
  contratto: 'determinato'
}

// snack 3 
const sviluppatore: Developer = {
  nome: 'Vincenzo',
  cognome: 'Tulimieri',
  annoNascita: 1995,
  sesso: 'm',
  annoDiServizio: [2021, 2022, 2023],
  emailAziendale: 'vincenzo22@gmail.com',
  contratto: 'determinato',
  livelloEsperienza: 'junior',
  certificazioni: ['Boolean']
}

const manager: ProjectManager = {
  nome: 'Marco',
  cognome: 'Rossi',
  annoNascita: 1990,
  sesso: 'm',
  annoDiServizio: [2018, 2019, 2020, 2021, 2022, 2023],
  emailAziendale: 'vincenzo22@gmail.com',
  contratto: 'indeterminato',
  teamSize: 0,
  stakeholderPrincipali: []
}
