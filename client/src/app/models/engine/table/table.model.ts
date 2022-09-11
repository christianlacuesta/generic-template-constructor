export interface TableModel {
    tableName: string;
    filters: any;
    limit: number;
    offset: number;
    count: number;
    rows: any[];
}

export interface TablePaginator {
    rows: number;
    first: number;
    rowsPerPageOptions: any[];
    totalRecords: number;
}