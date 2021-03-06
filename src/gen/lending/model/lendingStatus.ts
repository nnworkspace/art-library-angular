/**
 * Art Library of Alpha Org
 * This is a server for Art Library of Alpha Org. 
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: nnworkspace@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export type LendingStatus = 'reserved' | 'sent to lender' | 'return reported' | 'lending closed' | 'record deleted';

export const LendingStatus = {
    Reserved: 'reserved' as LendingStatus,
    SentToLender: 'sent to lender' as LendingStatus,
    ReturnReported: 'return reported' as LendingStatus,
    LendingClosed: 'lending closed' as LendingStatus,
    RecordDeleted: 'record deleted' as LendingStatus
};

