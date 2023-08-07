import { Request } from 'express';

export interface AuthedReq extends Request {
  userId: number;
}
