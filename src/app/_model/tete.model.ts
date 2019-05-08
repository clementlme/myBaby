export class Tete {
    id: number;
    bosom: string; // Gauche | Droit
    start: Date;
    end: Date;
    comment: string;
    status: 0 | 1 | 2; // 0 : create | 1 : in progress | 2 : done
    user: string;
}
