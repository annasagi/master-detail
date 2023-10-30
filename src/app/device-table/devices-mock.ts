import { IDevice } from '../models/device';

const ad4_ID = 'eyJ0IjoiRGV2aWNlIiwiYSI6ImRkNGExNzk0LTAwMDAtMTFkZC1hMDAwLTAwMGVkZGNjY2NjYyJ9';
const ulxd_ID = 'eyJ0IjoiRGV2aWNlIiwiYSI6ImRkZmZlMjgxLTAwMDAtMTFkZC1hMDAwLTAwMGVkZGNjY2NjYyJ9';
export const devicesData: IDevice[] = [
	{
		deviceId: 'wei-ad4-mock',
		id: ad4_ID,
		model: 'AD4Q',
		channels: [
			{
				index: `${ad4_ID}-0`,
				audioChannel: {
					id: 'eyJ0IjoiQXVkaW9DaGFubmVsIiwiYSI6ImRkNGExNzk0LTAwMDAtMTFkZC1hMDAwLTAwMGVkZGNjY2NjYyIsInMiOiJDSCIsImkiOjB9',
					name: 'wei1-mock',
					rmsRange: {
						min: -100,
						max: 0
					},
					peakRange: {
						min: -115,
						max: 0
					},
					rms: -100,
					peak: -115
				},
				rfChannel: {
					id: 'eyJ0IjoiQXVkaW9DaGFubmVsIiwiYSI6ImRkNGExNzk0LTAwMDAtMTFkZC1hMDAwLTAwMGVkZGNjY2NjYyIsInMiOiJDSCIsImkiOjB9',
					levelA: -120,
					levelRange: {
						min: -120,
						max: 0
					},
					rfScalingFactor: 10
				}
			},
			{
				index: `${ad4_ID}-1`,
				audioChannel: {
					id: 'eyJ0IjoiQXVkaW9DaGFubmVsIiwiYSI6ImRkNGExNzk0LTAwMDAtMTFkZC1hMDAwLTAwMGVkZGNjY2NjYyIsInMiOiJDSCIsImkiOFB9',
					name: 'wei2-mock',
					rmsRange: {
						min: -100,
						max: 0
					},
					peakRange: {
						min: -115,
						max: 0
					},
					rms: -100,
					peak: -115
				},
				rfChannel: {
					id: 'eyJ0IjoiQXVkaW9DaGFubmVsIiwiYSI6ImRkNGExNzk0LTAwMDAtMTFkZC1hMDAwLTAwMGVkZGNjY2NjYyIsInMiOiJDSCIsImkiOKB9',
					levelA: -120,
					levelRange: {
						min: -120,
						max: 0
					},
					rfScalingFactor: 10
				}
			},
			{
				index: `${ad4_ID}-2`,
				audioChannel: {
					id: 'eyJ0IjoiQXVkaW9DaGFubmVsIiwiYSI6ImRkNGExNzk0LTAwMDAtMTFkZC1hMDAwLTAwMGVkZGNjY2NjYKIsInMiOiJDSCIsImkiOAB9',
					name: 'wei3-mock',
					rmsRange: {
						min: -100,
						max: 0
					},
					peakRange: {
						min: -115,
						max: 0
					},
					rms: -100,
					peak: -115
				},
				rfChannel: {
					id: 'eyJ0IjoiQXVkaW9DaGFubmVsIiwiYSI6ImRkNGExNzk0LTAwMDAtMTFkZC1hMDAwLTAwMGVkZGNjY2NjYBIsInMiOiJDSCIsImkiONB9',
					levelA: -120,
					levelRange: {
						min: -120,
						max: 0
					},
					rfScalingFactor: 10
				}
			},
			{
				index: `${ad4_ID}-3`,
				audioChannel: {
					id: 'eyJ0IjoiQXVkaW9DaGFubmVsIiwiYSI6ImRkNGExNzk0LTAwMDAtMTFkZC1hMDAwLTAwMGVkZGNjY2NjYCIsInMiOiJDSCIsImkiOAB9',
					name: 'wei4-mock',
					rmsRange: {
						min: -100,
						max: 0
					},
					peakRange: {
						min: -115,
						max: 0
					},
					rms: -100,
					peak: -115
				},
				rfChannel: {
					id: 'eyJ0IjoiQXVkaW9DaGFubmVsIiwiYSI6ImRkNGExNzk0LTAwMDAtMTFkZC1hMDAwLTAwMGVkZGNjY2NjYDIsInMiOiJDSCIsImkiONB9',
					levelA: -120,
					levelRange: {
						min: -120,
						max: 0
					},
					rfScalingFactor: 10
				}
			}
		]
	},
	{
		deviceId: 'ULXDMock',
		id: ulxd_ID,
		model: 'ULXD4Q',
		channels: [
			{
				index: `${ulxd_ID}-0`,
				audioChannel: {
					id: 'eyJ0IjoiQXVkaW9DaGFubmVsIiwiYSI6ImRkZmZlMjgxLTAwMDAtMTFkZC1hMDAwLTAwMGVkZGNjY2NjYyIsInMiOiJDSCIsImkiOjF9',
					name: 'wei1-mock',
					rmsRange: {
						min: -100,
						max: 0
					},
					peakRange: {
						min: -115,
						max: 0
					},
					rms: -100,
					peak: -115
				},
				rfChannel: {
					id: 'eyJ0IjoiQXVkaW9DaGFubmVsIiwiYSI6ImRkZmZlMjgxLTAwMDAtMTFkZC1hMDAwLTAwMGVkZGNjY2NjYyIsInMiOiJDSCIsImkiOjRF',
					levelA: -120,
					levelRange: {
						min: -120,
						max: 0
					},
					rfScalingFactor: 1
				}
			},
			{
				index: `${ulxd_ID}-1`,
				audioChannel: {
					id: 'eyJ0IjoiQXVkaW9DaGFubmVsIiwiYSI6ImRkZmZlMjgxLTAwMDAtMTFkZC1hMDAwLTAwMGVkZGNjY2NjYyIsInMiOiJDSCIsImkiOjJ9',
					name: 'wei2-mock',
					rmsRange: {
						min: -100,
						max: 0
					},
					peakRange: {
						min: -115,
						max: 0
					},
					rms: -100,
					peak: -115
				},
				rfChannel: {
					id: 'eyJ0IjoiQXVkaW9DaGFubmVsIiwiYSI6ImRkZmZlMjgxLTAwMDAtMTFkZC1hMDAwLTAwMGVkZGNjY2NjYyIsInMiOiJDSCIsImkiOjJ9RF',
					levelA: -120,
					levelRange: {
						min: -120,
						max: 0
					},
					rfScalingFactor: 1
				}
			},
			{
				index: `${ulxd_ID}-2`,
				audioChannel: {
					id: 'eyJ0IjoiQXVkaW9DaGFubmVsIiwiYSI6ImRkZmZlMjgxLTAwMDAtMTFkZC1hMDAwLTAwMGVkZGNjY2NjYyIsInMiOiJDSCIsImkiOjN9',
					name: 'wei3-mock',
					rmsRange: {
						min: -100,
						max: 0
					},
					peakRange: {
						min: -115,
						max: 0
					},
					rms: -100,
					peak: -115
				},
				rfChannel: {
					id: 'eyJ0IjoiQXVkaW9DaGFubmVsIiwiYSI6ImRkZmZlMjgxLTAwMDAtMTFkZC1hMDAwLTAwMGVkZGNjY2NjYyIsInMiOiJDSCIsImkiOjN9RF',
					levelA: -120,
					levelRange: {
						min: -120,
						max: 0
					},
					rfScalingFactor: 1
				}
			},
			{
				index: `${ulxd_ID}-3`,
				audioChannel: {
					id: 'eyJ0IjoiQXVkaW9DaGFubmVsIiwiYSI6ImRkZmZlMjgxLTAwMDAtMTFkZC1hMDAwLTAwMGVkZGNjY2NjYyIsInMiOiJDSCIsImkiOBCDjN9',
					name: 'wei4-mock',
					rmsRange: {
						min: -100,
						max: 0
					},
					peakRange: {
						min: -115,
						max: 0
					},
					rms: -100,
					peak: -115
				},
				rfChannel: {
					id: 'eyJ0IjoiQXVkaW9DaGFubmVsIiwiYSI6ImRkZmZlMjgxLTAwMDAtMTFkZC1hMDAwLTAwMGVkZGNjY2NjYyIsInMiOiJDSCIsImkiOjDNB9RF',
					levelA: -120,
					levelRange: {
						min: -120,
						max: 0
					},
					rfScalingFactor: 1
				}
			}
		]
	}
];
