export interface Domain {
  pk: number,
  name: string,
  hostname: string,
  baseDn: string,
  workstationName: string,
  workstationPassword: string,
  userDn: string,
  userPassword: string,
  dumpStatus: string,
  dumpStatusUpdate: string,
  dumpErrDesc: string | null,
  bruteStatus: string,
  bruteProgress: number,
  bruteStatusUpdate: string,
  bruteErrorDesc: string | null,
  noExpPassStatus: string,
  noExpPassStatusUpdate: string,
  noExpPassErrDesc: string | null,
  reusedPassStatus: string,
  reusedPassStatusUpdate: string,
  reusedPassErrDesc: string | null
}

export interface DomainsList extends Array<Domain> {
}

export interface createDomain {
  name: string,
  hostname: string,
  baseDn: string,
  workstationName: string,
  workstationPassword: string,
  userDn: string,
  userPassword: string
}

export interface BrutedNTLMAcc {
  pk: number,
  domain: number,
  samAccName: string,
  accPassword: string,
  updateTime: string
}

export interface BrutedNTLMAccsList extends Array<BrutedNTLMAcc> {
}

export interface NoExpPassAcc {
  pk: number,
  domain: number,
  samAccName: string,
  createTime: string
}

export interface NoExpPassAccsList extends Array<NoExpPassAcc> {
}

export interface ReusedPassAcc {
  pk: number,
  domain: number,
  samAccName: string,
  createTime: string
}

export interface ReusedPassAccsList extends Array<ReusedPassAcc> {
}
