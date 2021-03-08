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
import { NewArtwork } from './newArtwork';
import { LendingMeta } from './lendingMeta';
import { ArtworkAllOf } from './artworkAllOf';


export interface Artwork { 
    title: string;
    artForm: Artwork.ArtFormEnum;
    description?: string;
    storageLocation: string;
    artist?: string;
    /**
     * If the artwork is a print or other manufactured article, record the publisher or manufacturer here.
     */
    producer?: string;
    /**
     * If the artwork has a serial number, record it in this property.
     */
    productSerialNumber?: string;
    imageUrls?: Array<string>;
    /**
     * The date when Alpha Org obtained this piece of artwork.
     */
    dateObtained?: string;
    /**
     * Market value of this piece of artwork. Unit in Euro.
     */
    marketValue?: number;
    /**
     * Status of this artwork in alpha org.
     */
    status: Artwork.StatusEnum;
    /**
     * Nearst next date when this artwork is available for lending.
     */
    nextAvailableDate: string;
    /**
     * Any comment about this artwork
     */
    comment?: string;
    /**
     * Date and time when this record is created.
     */
    createdOn: string;
    /**
     * User id of the admin who created this record.
     */
    createdBy: string;
    /**
     * Time of last update of this record, a timestamp.
     */
    lastUpdatedOn: string;
    /**
     * User id of the admin who last updated this record.
     */
    lastUpdatedBy: string;
    /**
     * ID of a artwork. ID of an artwork is a combination of the artist name and the artwork name and optional integer identifier
     */
    id: string;
    self: string;
    /**
     * A list of lending records of this piece of artwork. If this artwork does not have any lending history, this array can be null.
     */
    lendings?: Array<LendingMeta>;
}
export namespace Artwork {
    export type ArtFormEnum = 'painting' | 'photograph' | 'print' | 'sculpture' | 'assemblage' | 'collage';
    export const ArtFormEnum = {
        Painting: 'painting' as ArtFormEnum,
        Photograph: 'photograph' as ArtFormEnum,
        Print: 'print' as ArtFormEnum,
        Sculpture: 'sculpture' as ArtFormEnum,
        Assemblage: 'assemblage' as ArtFormEnum,
        Collage: 'collage' as ArtFormEnum
    };
    export type StatusEnum = 'available' | 'reserved' | 'in use' | 'return reported' | 'not for lending' | 'record deleted';
    export const StatusEnum = {
        Available: 'available' as StatusEnum,
        Reserved: 'reserved' as StatusEnum,
        InUse: 'in use' as StatusEnum,
        ReturnReported: 'return reported' as StatusEnum,
        NotForLending: 'not for lending' as StatusEnum,
        RecordDeleted: 'record deleted' as StatusEnum
    };
}


