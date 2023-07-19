interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['HR Manager', 'Employee', 'Team Lead', 'Administrator', 'Owner'],
  tenantName: 'Business',
  applicationName: 'Image uploader',
  addOns: [],
};
