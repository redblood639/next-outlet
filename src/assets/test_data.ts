export const accounts: any = [
  { label: "Account 1", index: 1 },
  { label: "Account 2", index: 2 },
  { label: "Account 3", index: 3 },
  { label: "Account 4", index: 4 },
  { label: "Account 5", index: 5 },
  { label: "Account 6", index: 6 },
];

export async function getAccounts() {
  return await accounts;
}

export async function getDetailAccount(id: any) {
  return (await id) > 6;
}

export const devices: any = [
  { label: "Device 1", index: 1 },
  { label: "Device 2", index: 2 },
  { label: "Device 3", index: 3 },
  { label: "Device 4", index: 4 },
  { label: "Device 5", index: 5 },
  { label: "Device 6", index: 6 },
];
