export const vendorMenu = (foodCourtId: string, vendorId: string) => {
  return `/vendors/${foodCourtId}/${vendorId}/menu`;
};

export const vendorDetail = (foodCourtId: string, vendorId: string) => {
  return `/vendors/${foodCourtId}/${vendorId}/detail`;
};
