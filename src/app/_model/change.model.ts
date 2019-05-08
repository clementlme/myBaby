export class Change {
    id: number;
    date: Date;
    pee: boolean;
    poop: boolean;
    trace: boolean;
    poopRange: number;
    comment: string;
    status: 0 | 1; // 0 : null | 1 : create,
    user: string;
}
