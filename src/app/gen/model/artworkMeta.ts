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
     * The date when Alpha Org obtained this piece of artwork.
     */
    dateObtained?: string;
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
}


