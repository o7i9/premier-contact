import type {Topic} from "../types/Topic"; 

export const initialTopics: Topic [] = [
    {
        id: 1, 
        name: 'Bun',
        description: 'Installer les dépendances et exécuter les scripts.',
        completed: true,
    },
    {
    id: 2,
    name: 'Vite',
    description: "Servir et construire l'application.",
    completed: false,
    },
    {
    id: 3,
    name: 'TypeScript',
    description: 'Ajouter un système de types à JavaScript.',
    completed: false,
    },
    {
    id: 4,
    name: 'TSX',
    description: 'Décrire une interface dans du code TypeScript.',
    completed: false,
    },
    {
    id: 5,
    name: 'Composant React',
    description: "Découper l'interface en éléments réutilisables.",
    completed: false,
    },
    {
    id: 6,
    name: 'Props',
    description: 'Transmettre des données à un composant React.',
    completed: false,
    },
]; 