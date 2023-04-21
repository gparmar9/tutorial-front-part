import { Game } from '../../game/model/Game';
import { Client } from '../../client/model/Client';

export class Lending {
    id: number;
    game: Game;
    client: Client;
    beginDate: Date;
    endDate: Date;
}