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


export interface ArtworkMeta { 
    /**
     * ID of a artwork. ID of an artwork is a combination of the artist name and the artwork name and optional integer identifier
     */
    id: string;
    self: string;
    name: string;
    artForm: ArtworkMeta.ArtFormEnum;
    description?: string;
    storageLocation: string;
    artist?: string;
    imageUrls?: Array<string>;
    /**
     * If the artwork is a print or other manufactured article, record the publisher or manufacturer here.
     */
    producer?: string;
    /**
     * If the artwork has a serial number, record it in this property.
     */
    productSerialNumber?: string;
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
    status: ArtworkMeta.StatusEnum;
    /**
     * Nearst next date when this artwork is available for lending.
     */
    nextAvailableDate: string;
    /**
     * Any comment about this artwork
     */
    comment?: string;
}
export namespace ArtworkMeta {
    export type ArtFormEnum = 'painting' | 'photograph' | 'print' | 'sculpture' | 'assemblage' | 'collage';
    export const ArtFormEnum = {
        Painting: 'painting' as ArtFormEnum,
        Photograph: 'photograph' as ArtFormEnum,
        Print: 'print' as ArtFormEnum,
        Sculpture: 'sculpture' as ArtFormEnum,
        Assemblage: 'assemblage' as ArtFormEnum,
        Collage: 'collage' as ArtFormEnum
    };
    export type StatusEnum = 'available' | 'reserved' | 'in use' | 'return reported' | 'record deleted';
    export const StatusEnum = {
        Available: 'available' as StatusEnum,
        Reserved: 'reserved' as StatusEnum,
        InUse: 'in use' as StatusEnum,
        ReturnReported: 'return reported' as StatusEnum,
        RecordDeleted: 'record deleted' as StatusEnum
    };
}


