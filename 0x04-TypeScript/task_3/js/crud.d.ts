import { RowID, RowElement } from "./interface";

declare function insertRow(row: RowElement): number {
  console.log("Insert row", row);
  return Math.floor(Math.random() * Math.floor(1000));
};

declare function deleteRow(rowId: RowID): void {
  console.log("Delete row id", rowId);
  return;
};

declare function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);

  return rowId;
};
