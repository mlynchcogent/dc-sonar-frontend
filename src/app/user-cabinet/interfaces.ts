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
  samAccName: string,
  accPassword: string,
  updateTime: string
}

export interface DomainBrutedNTLM {
  pk: number,
  name: string,
  hostname: string,
  baseDn: string,
  brutedNtlmAcc: BrutedNTLMAcc[]
}

export interface DomainBrutedNTLMList extends Array<DomainBrutedNTLM> {
}

export interface NoExpPassAcc {
  pk: number,
  samAccName: string,
  createTime: string
}

export interface DomainNoExpPassAcc {
  pk: number,
  name: string,
  hostname: string,
  baseDn: string,
  noExpPassAcc: NoExpPassAcc[]
}

export interface DomainNoExpPassAccList extends Array<DomainNoExpPassAcc> {
}

export interface ReusedPassAcc {
  pk: number,
  samAccName: string,
  createTime: string
}

export interface DomainReusedPassAcc {
  pk: number,
  name: string,
  hostname: string,
  baseDn: string,
  reusedPassAcc: ReusedPassAcc[]
}

export interface DomainReusedPassAccList extends Array<DomainReusedPassAcc> {
}
