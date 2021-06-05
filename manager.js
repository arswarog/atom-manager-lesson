function declareAtom(name, deps, events) {
    return {
        name: name,
        deps: deps,
        events: events,
    }
}

/**
 * 
 * @param {Array<Atom>} atoms Список всех атомов
 * @returns 
 */
function createManager(atoms) {
    for (let atom of atoms) {
        console.log(atom['name'], atom['deps']);
    }

    function dispatch() {

    }

    /**
     * 
     * @param {Atom} target Целевой атом
     * @returns Array<Atom> какие атомы зависят от target
     */
    function getDeps(target) {
        console.log(`От ${target.name} зависят:`)
        for (let elem of atoms) {
            let found = false;
            for (let x of elem.deps) {
                if (x === target)
                    found = true;
            }
            if (found)
                console.log('-', elem.name)
        }
        // console.log(atoms[0].deps[0]) // atomb
    }

    return {
        dispatch: dispatch,
        getDeps: getDeps,
    };
}