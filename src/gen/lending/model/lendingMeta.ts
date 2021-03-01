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


export interface LendingMeta { 
    /**
     * ID of a lending record. This is an automatically generated UUID, basically time based.
     */
    id: string;
    self: string;
    /**
     * ID of a artwork. ID of an artwork is a combination of the artist name and the artwork name and optional integer identifier
     */
    artworkId: string;
    /**
     * ID of the user who borrowed the artwork.
     */
    userId: string;
    lendingStatus: LendingMeta.LendingStatusEnum;
    startDate: string;
    endDate: string;
}
export namespace LendingMeta {
    export type LendingStatusEnum = 'reserved' | 'sent to lender' | 'return reported' | 'lending closed' | 'record deleted';
    export const LendingStatusEnum = {
        Reserved: 'reserved' as LendingStatusEnum,
        SentToLender: 'sent to lender' as LendingStatusEnum,
        ReturnReported: 'return reported' as LendingStatusEnum,
        LendingClosed: 'lending closed' as LendingStatusEnum,
        RecordDeleted: 'record deleted' as LendingStatusEnum
    };
}


