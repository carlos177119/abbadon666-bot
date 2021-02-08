const usedCommandRecently = new Set() // Isso é o anti flood

const isFiltered = (from) => !!usedCommandRecently.has(from)

const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), 5000) // Espere 5 segundos antes de ejecutar otro comando, es útil para evitar una buena prohibición en WhatsApp, 5000 = 5 segundos, aumentar o disminuir si quieres
}

module.exports = {
    isFiltered,
    addFilter
}