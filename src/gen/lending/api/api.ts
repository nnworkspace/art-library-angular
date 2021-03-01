export * from './lending.service';
import { LendingService } from './lending.service';
export * from './lendings.service';
import { LendingsService } from './lendings.service';
export const APIS = [LendingService, LendingsService];
