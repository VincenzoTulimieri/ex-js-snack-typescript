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

// Snack 3

export type Developer = Dipendente & {
    livelloEsperienza:'senior' | 'mid' | 'junior',
    linguaggi?: string[],
    certificazioni: string[] | null
}

export type ProjectManager = Dipendente & {
    teamSize: number | null,
    budgetGestito?: number,
    stakeholderPrincipali: string[]
}