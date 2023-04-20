import { Game } from '../../game/model/Game';
import { Client } from '../../client/model/Client';

export class Lending {
    id: number;
    game: Game;
    client: Client;
    begin_date: Date;
    end_date: Date;
}