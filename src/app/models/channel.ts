export interface MeterRange {
	min: number;
	max: number;
}

export interface IAudioChannel {
	id: string;
	name: string | undefined;
	peakRange: MeterRange;
	rmsRange: MeterRange;
	rms: number;
	peak: number;
}

export interface IRfChannel {
	id: string;
	levelA: number;
	levelRange: MeterRange;
	rfScalingFactor: number;
}

export interface IChannel {
	index: string;
	audioChannel?: IAudioChannel;
	rfChannel?: IRfChannel;
}
