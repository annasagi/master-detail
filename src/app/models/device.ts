import { IChannel } from './channel';

export interface IDevice {
	id: string;
	deviceId: string;
	model: string;
	channels: IChannel[];
}

export type InventoryDevice = {
	id: string;
	features: {
		audioChannels?:
			| {
					audioChannels: Array<{
						id: string;
						features: { name?: { name: string } | undefined };
					}>;
			  }
			| undefined;
		rfChannels?:
			| {
					rfChannels: Array<{
						id: string;
					}>;
			  }
			| undefined;

		name?: { name: string } | undefined;
	};
	description: { model: string };
};
