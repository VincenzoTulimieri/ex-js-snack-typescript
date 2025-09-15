// Snack 2
export type Dipendente = {
    nome: string,
    cognome: string,
    annoNascita: number
    sesso: 'm' | 'f'
    annoDiServizio: [number,...number[]],
    readonly emailAziendale: string
    contratto: 'indeterminato' | 'determinato' | 'freelance'
}