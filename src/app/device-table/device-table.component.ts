import { Component, ViewChild } from '@angular/core';
import {
	CellClickedEvent,
	ColDef,
	GridReadyEvent,
	IDetailCellRendererParams,
	RowSelectedEvent,
	SelectionChangedEvent,
	GetRowIdFunc,
	GetRowIdParams
} from 'ag-grid-community';

import 'ag-grid-enterprise';

import { AgGridAngular } from 'ag-grid-angular';
import { devicesData } from './devices-mock';

import { IDevice } from '../models/device';
import { IChannel } from '../models/channel';


@Component({
	selector: 'device-table',
	templateUrl: './device-table.component.html',
	styleUrls: ['./device-table.component.scss']
})
export class DeviceTableComponent {
	// Each Column Definition results in one Column.
	public columnDefs: ColDef[] = [
		{
			field: 'deviceId',
			cellRenderer: 'agGroupCellRenderer',
			checkboxSelection: true,
			showDisabledCheckboxes: true
		},
		{ field: 'model' }
	];

	// DefaultColDef sets props common to all Columns
	public defaultColDef: ColDef = {
		sortable: true,
		filter: true
	};

	public detailCellRendererParams: any = {
		detailGridOptions: {
			rowSelection: 'multiple',
			suppressRowClickSelection: true,
			enableRangeSelection: true,
			columnDefs: [{ field: 'audioChannel.name', checkboxSelection: true }],
			defaultColDef: {
				flex: 1
			},
			onSelectionChanged: (event) => {
				console.log(event);
				const selectedChannels: IChannel[] = [];
				this.agGrid.api.forEachDetailGridInfo((detailGridInfo) => {
					const selectedNodes = detailGridInfo.api?.getSelectedNodes();
					selectedNodes?.forEach((node) => {
						if (node.data && node.data.index) {
							selectedChannels.push(node.data);
						}
					});
				});
				//this.channelSelectionService.onChannelSelectionChanged(selectedChannels);
			}
		},
		// get the rows for each Detail Grid
		getDetailRowData: (params) => {
			params.successCallback(params.data.channels);
		}
	} as IDetailCellRendererParams<IDevice, IChannel>;

	public getRowId: GetRowIdFunc = (params: GetRowIdParams) => params.data.id;

	public rowSelection: 'single' | 'multiple' = 'multiple';
	// Data that gets displayed in the grid
	public rowData: IDevice[] = devicesData;

	// For accessing the Grid's API
	@ViewChild(AgGridAngular) agGrid!: AgGridAngular;

	constructor() {}

	ngOnInit(): void {}

	// Example load data from server
	onGridReady(params: GridReadyEvent) {}

	// Example of consuming Grid Event
	onCellClicked(e: CellClickedEvent): void {
		console.log('cellClicked', e);
	}

	selectAll(): void {
		this.agGrid.api.selectAll();
		// iterate over all DetailGridInfos, and call stopEditing() on each one
		this.agGrid.api.forEachDetailGridInfo((detailGridInfo) => {
			detailGridInfo.api?.selectAll();
		});
	}
	// Example using Grid's API
	clearSelection(): void {
		this.agGrid.api.deselectAll();

		this.agGrid.api.forEachDetailGridInfo((detailGridInfo) => {
			detailGridInfo.api?.deselectAll();
		});
	}

	collapseAll(): void {
		this.agGrid.api.forEachNode(function (node) {
			node.setExpanded(false);
		});
	}
	expandAll(): void {
		this.agGrid.api.forEachNode(function (node) {
			node.setExpanded(true);
		});
	}

	onRowSelected(event: RowSelectedEvent) {
		//console.log( "On row selected");
		//console.log(event);

		//console.log(event.data.channels.length);

		if (event.data && event.node.data.channels) {
			const selected: boolean | undefined = event.node?.isSelected();
			const detailId = 'detail_' + event.node.id;
			const detailGrid = event.api.getDetailGridInfo(detailId);
			if (selected) {
				detailGrid?.api?.selectAll();
			} else {
				detailGrid?.api?.deselectAll();
			}
			//console.log(detailGrid);
		}
	}
	//
	onSelectionChanged(event: SelectionChangedEvent) {
		var rowCount = event.api.getSelectedNodes().length;
		//console.log("Device table onSelectionChanged " + rowCount + " rows selected");

		const selectedChannels: IChannel[] = [];
		const selectedNodes = event.api?.getSelectedNodes();
		selectedNodes?.forEach((node) => {
			if (node.data && node.data.channels) {
				node.data.channels.forEach((channel: IChannel) => {
					selectedChannels.push(channel);
				});
			}
		});
		//this.channelSelectionService.onChannelSelectionChanged(selectedChannels);
		//console.log("onSelectionChanged");
		//console.log(selectedChannels);
	}

	
}
