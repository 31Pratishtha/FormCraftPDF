import { IAddress, IBasicInfo } from './common'

export interface ICASoleProprietership extends IBasicInfo, IAddress {
	businessName: string,
	gstn: string,
	industry: string,
	founderName: string,
}
