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
import { LendingMeta } from './lendingMeta';


export interface ArtworkAllOf { 
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

